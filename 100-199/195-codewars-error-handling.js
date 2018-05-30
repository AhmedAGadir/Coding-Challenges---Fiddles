// https://www.codewars.com/kata/error-throwing-error-handling-number-2


function validateMessage(msg) {
  if (typeof msg == 'string' && (msg.length > 255 || msg.length == 0)) throw new RangeError(`Message contains ${msg.length} characters!`)
  else if (msg == null) throw new ReferenceError('Message is null!');
  else if (typeof msg !== 'string') throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  else {
    return (/<.*>/g.test(msg)) ? false : true ;
  }
}