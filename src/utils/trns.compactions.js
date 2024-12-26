import { data } from "../../public/data/transactions/transactions.js";

export function compaction_old_trns(buffer, threashold_timestamp, new_buff) {
  const data_buf = JSON.parse(buffer);
  if (!Array.isArray(data_buf)) {
    return { success: false };
  }

  let valid_trns = [];
  data_buf.forEach((trns) => {
    if (trns["timestamp"] > threashold_timestamp) {
      valid_trns.push(trns);
    }
  });

  // New transaction pushing to buffer of non-processed transactions
  valid_trns.push(new_buff);

  return { success: true, data: valid_trns };
}
