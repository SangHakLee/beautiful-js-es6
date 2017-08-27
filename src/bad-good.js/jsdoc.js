const Bad = {
  greeting: (username, message='hello', date=new Date()) => {
      return `${message} ${username} at ${date}`
  }
}

const Good = {
  /**
   * @function greeting
   * @desc return greeting message
   * 
   * @param {String} username - user's name
   * @param {String} [message='hello'] - greeting message
   * @param {Date} [date=new Date()] - system time
   * @returns {String}
   * 
   */
  greeting: (username, message='hello', date=new Date()) => {
      return `${message} ${username} at ${date}`
  }
}

module.exports = {
    Bad,
	  Good,
};
