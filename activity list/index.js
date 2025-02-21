

function Activity(amount) {
  this.setAmount(amount);
}

Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false;
  } else {
    this.amount = value;
    return true;
  }
};

Activity.prototype.getAmount = function () {
  return this.amount;
};

function Payment(amount, receiver) {
  this.setAmount(amount);
  this.setReceiver(receiver);
}
Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function (receiver) {
  this.receiver = receiver;
};

Payment.prototype.getReceiver = function () {
  return this.receiver;
};

function Refund(amount, sender) {
  this.setAmount(amount);
  this.setSender(sender);
}
Refund.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function (sender) {
  this.sender = sender;
};

Refund.prototype.getSender = function () {
  return this.sender;
};