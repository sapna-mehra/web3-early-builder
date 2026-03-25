const tasks = [
  { name: "Join Testnet", status: "pending" },
  { name: "Swap Tokens", status: "pending" },
  { name: "Provide Liquidity", status: "pending" }
];

function showTasks() {
  console.log("📋 Web3 Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name} - ${task.status}`);
  });
}

showTasks();
