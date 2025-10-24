        /**
         * The core logic function that determines the time of day and updates the display.
         */
        function updateGreeting() {
    const d = new Date();
    let hour = d.getHours();
    
    const morning = document.querySelector("#morning");
    const afternoon = document.querySelector("#afternoon");
    const night = document.querySelector("#night");

morning.classList.add("d-none");
afternoon.classList.add("d-none");
night.classList.add("d-none");

if (hour >=5 && hour < 12) {
    morning.classList.remove("d-none");
}

else if (hour >= 12 && hour < 18) {
    afternoon.classList.remove("d-none");
}

else {
    night.classList.remove("d-none")
    }
}
        
window.onload = updateGreeting;
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
