
function palindromeChallenge() {
  var $form = $('.palindrome-challenge-form');
  var $input = $form.find('.palindrome-challenge-input');
  var $feedback = $form.find('.palindrome-challenge-feedback');


  // Listeners
  $form.on('submit', submitChallenge);


  // Methods
  function checkPalindrome() {
    var originalValue = $input.val();
    var reversedValue = originalValue.split('').reverse().join('');
    return originalValue === reversedValue;
  }

  function submitChallenge(event) {
    event.preventDefault();

    var isPalindrome = checkPalindrome();
    var feedbackText;

    if (isPalindrome) {
      feedbackText = 'is a palindrome!';
    } else {
      feedbackText = 'is not a palindrome!';
    }

    $feedback.text(feedbackText);
  }
}


$(document).ready(function() {
  palindromeChallenge();
});
