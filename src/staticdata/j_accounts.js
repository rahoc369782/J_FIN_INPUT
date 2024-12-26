// Define available accounts for Debit and Credit (Example accounts, extend as needed)
export const j_allowed_accounts = [
  // Expense Accounts
  { name: "assets:bank:expense:federal", value: "assets:bank:expense:federal" },

  // Saving Account
  { name: "assets:bank:savings:sbi", value: "assets:bank:savings:sbi" },

  // Personal Reserve Account (Secret Reserve)
  { name: "assets:bank:reserve:union", value: "assets:bank:reserve:union" },

  // Emergency Fund Account
  { name: "assets:bank:emergency:idfc", value: "assets:bank:emergency:idfc" },

  // Income Accounts
  { name: "assets:bank:income:icici", value: "assets:bank:income:icici" },
  { name: "income:salary", value: "income:salary" },
  { name: "income:freelance", value: "income:freelance" },
  { name: "income:investment", value: "income:investment" },
  { name: "income:interest", value: "income:interest" },
  { name: "income:other", value: "income:other" },
  { name: "income:gifts", value: "income:gifts" },

  // Expense Accounts (Similar to Income Accounts)
  { name: "expense:groceries", value: "expense:groceries" },
  { name: "expense:lifestyle:clothes", value: "expense:lifestyle:clothes" },
  { name: "expense:lifestyle:shoes", value: "expense:lifestyle:shoes" },
  { name: "expense:office:parties", value: "expense:office:parties" },
  { name: "expense:office:food&drink", value: "expense:office:food&drink" },
  { name: "expense:travel", value: "expense:travel" },
  { name: "expense:travel", value: "expense:travel" },
  { name: "expense:household", value: "expense:household" },
  { name: "expense:household:rent", value: "expense:household:rent" },
  { name: "expense:utilities", value: "expense:utilities" },
  { name: "expense:entertainment", value: "expense:entertainment" },
  { name: "expense:medical", value: "expense:medical" },
  { name: "expense:education", value: "expense:education" },
  { name: "expense:personal", value: "expense:personal" },

  // *Investments* (under assets)
  {
    name: "assets:bank:investments:axis",
    value: "assets:bank:investments:axis",
  },
  { name: "assets:investments:stocks", value: "assets:investments:stocks" },
  {
    name: "assets:investments:mutual_funds",
    value: "assets:investments:mutual_funds",
  },
  {
    name: "assets:investments:mutual_funds:coin",
    value: "assets:investments:mutual_funds:coin",
  },
  {
    name: "assets:investments:mutual_funds:groww",
    value: "assets:investments:mutual_funds:groww",
  },
  {
    name: "assets:investments:mutual_funds:dhan",
    value: "assets:investments:mutual_funds:dhan",
  },
  {
    name: "assets:investments:real_estate",
    value: "assets:investments:real_estate",
  },
  { name: "assets:investments:crypto", value: "assets:investments:crypto" },
  { name: "assets:investments:trading", value: "assets:investments:trading" },

  // Liability Accounts
  { name: "liabilities:credit_card", value: "liabilities:credit_card" },
  { name: "liabilities:loan:personal", value: "liabilities:loan:personal" },
  { name: "liabilities:loan:car", value: "liabilities:loan:car" },
  { name: "liabilities:loan:mortgage", value: "liabilities:loan:mortgage" },

  // *Investments (Specific)* - Additional tracking for more detailed categories
  {
    name: "assets:investments:stocks:long_term",
    value: "assets:investments:stocks:long_term",
  },
  {
    name: "assets:investments:stocks:short_term",
    value: "assets:investments:stocks:short_term",
  },
  {
    name: "assets:investments:real_estate:rentals",
    value: "assets:investments:real_estate:rentals",
  },
  {
    name: "assets:investments:real_estate:capital_gain",
    value: "assets:investments:real_estate:capital_gain",
  },
  {
    name: "assets:investments:crypto:btc",
    value: "assets:investments:crypto:btc",
  },
  {
    name: "assets:investments:crypto:eth",
    value: "assets:investments:crypto:eth",
  },

  // Equity self funded account
  {
    name: "equity:opening-balance",
    value: "equity:opening-balance",
  },
];
