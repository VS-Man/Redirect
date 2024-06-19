const loc = "https://docs.google.com/forms/d/e/1FAIpQLScFtFKhmXYo3GTJciBFmSytOBGN8ahHYK27bpcfMy9o5l-CCQ/viewform?usp=sf_link"

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTask() {
    console.log("Task started...");
    await wait(2000); // Wait for 2 seconds
    console.log("Task completed after 2 seconds");
    window.location.href = loc
}

performTask()
