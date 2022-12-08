const GREET_MORNING = 'Good Morning';
const GREET_AFTERNOON = 'Good Afternoon';
const GREET_EVENING = 'Good Evening';

class GreetingManager {
  /**
   * Gets a greeting message based on the current time.
   * The possible return are Good Morning, Good Afternoon, Good evening.
   * @param currentTime The current time in hours.
   * @returns Returns a greeting message.
   */
  static getGreetingByCurrentTime(
    currentTime: number = new Date().getHours(),
  ): String {
    if (currentTime < 12) {
      return GREET_MORNING;
    } else if (currentTime >= 12 && currentTime <= 17) {
      return GREET_AFTERNOON;
    } else {
      return GREET_EVENING;
    }
  }
}

export default GreetingManager;
