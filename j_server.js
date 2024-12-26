import inquirer from "inquirer";
import { transaction_pushing_process_initialization } from "./src/processes/push_latest_transactions.js";
import { j_allowed_accounts } from "./src/staticdata/j_accounts.js";

// Function to get debit or credit accounts along with the amount for each account
async function get_account_amounts(accountType) {
  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      name: "accounts",
      message: `Select ${accountType} accounts (You must select at least one account):`,
      choices: j_allowed_accounts,
      pageSize: 15,
      validate: (input) => {
        if (input.length === 0) {
          return `You must select at least one ${accountType} account.`;
        }
        return true;
      },
    },
  ]);

  const accounts = [];

  for (const accountLabel of answers.accounts) {
    const accountAmount = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: `Enter the amount for account: ${accountLabel} (You must enter an amount):`,
        validate: (input) => {
          if (isNaN(input) || input <= 0) {
            return "Please enter a valid amount greater than zero.";
          }
          return true;
        },
      },
    ]);

    accounts.push({
      account_label: accountLabel,
      amount: parseFloat(accountAmount.amount),
    });
  }

  return accounts;
}

// Function to get tags input
async function get_tags() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "tags",
      message: "Enter tags (comma-separated, you must enter at least one tag):",
      validate: (input) => {
        if (!input.trim()) {
          return "You must enter at least one tag.";
        }
        return true;
      },
    },
  ]);

  return answer.tags.split(",").map((tag) => tag.trim());
}

// Function to get date either as today's date or user-defined date
async function get_date() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "dateOption",
      message: "Would you like to use today's date or specify a custom date?",
      choices: [
        { name: "Use today's date", value: "today" },
        { name: "Specify a custom date", value: "custom" },
      ],
    },
  ]);

  let date;
  if (answer.dateOption === "today") {
    date = new Date().toISOString().split("T")[0].replaceAll("-", "/"); // Get today's date in YYYY-MM-DD format
  } else {
    const dateAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "date",
        message: "Enter the date (YYYY/MM/DD):",
        validate: (input) => {
          const regex = /^\d{4}\/\d{2}\/\d{2}$/;
          if (!input.match(regex)) {
            return "Please enter the date in the format YYYY/MM/DD.";
          }
          return true;
        },
      },
    ]);
    date = dateAnswer.date;
  }

  return date;
}

// Main function to collect all data and generate the schema
async function generate_entry() {
  const timestamp = Date.now(); // Automatically generate timestamp

  // Get Debit and Credit account amounts (both must be entered)
  const debitAccounts = await get_account_amounts("debit");
  const creditAccounts = await get_account_amounts("credit");

  // Get description (mandatory field)
  const description = await inquirer.prompt([
    {
      type: "input",
      name: "description",
      message: "Enter the description (This field is mandatory):",
      validate: (input) => {
        if (!input.trim()) {
          return "Description cannot be empty.";
        }
        return true;
      },
    },
  ]);

  // Get date (today or custom - mandatory)
  const date = await get_date();

  // Get tags (mandatory field)
  const tags = await get_tags();

  // Construct the entry object
  const entry = {
    timestamp: timestamp.toString(),
    accounts: {
      debit: debitAccounts,
      credit: creditAccounts,
    },
    description: description.description,
    date: date,
    tags: tags,
  };
  return entry;
}

// Run the program
generate_entry().then(async (newentry) => {
  console.log("\x1b[32m%s\x1b[0m", "Entry Genrated.");
  const entry_status = await transaction_pushing_process_initialization(
    newentry
  );

  if (entry_status.success) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Transaction pushing process completed successfully."
    );
    return 0;
  }
  console.log(
    "\x1b[31m\x1b[1m%s\x1b[0m",
    "Transaction pushing process failed."
  );
});
