        /**
         * The core logic function that determines the time of day and updates the display.
         */
        function updateGreeting() {
    const d = new Date();
    
    let hour = d.getHours();

    if (hour < 12) {

            // Get references to the three time-of-day element containers
document.querySelector("#night").classList.add("d-none");
document.querySelector("#afternoon").classList.add("d-none");
    } else if (hour >= 12) {
            
document.getElementsByTagName("morning").classList.add("d-none");
document.getElementsByTagName("night").classList.add("d-none");
    }
else {
document.querySelector("#morning").classList.add("d-none");
document.querySelector("#afternoon").classList.add("d-none");
}
        }

            // 1. Hide all elements first (ensures only one is shown

            // 2. Conditional Logic: Determine the time frame using if/else statements

            // Morning: 5 AM (inclusive) to 12 PM (exclusive) -> Hours 5 to 11

                // Show Morning


            // Afternoon: 12 PM (inclusive) to 6 PM (exclusive) -> Hours 12 to 17

                // Show Afternoon


            // Night: 6 PM (inclusive) to 4 AM (inclusive) -> Hours 18 to 4


            // Optional: Log the current time for debugging

        

        // Run the function once when the script loads

        // Optional: Run the function every 30 seconds (or more frequently) to update automatically
        // Note: Students should understand this is for real-time changes
        // setInterval(updateGreeting, 30000); 
document.onload = updateGreeting()