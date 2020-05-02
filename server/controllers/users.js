//
//

const User = require('../models/user');

exports.login = (req, res) => {
  return res.json({ message: 'Logging In!' });
};

exports.register = (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!password || !email) {
    return res.status(422).send({
      errors: [{ title: 'Missing Data', detail: 'Email or password missing' }],
    });
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({
      errors: [
        {
          title: 'Invalid Password',
          detail: 'Password is not matching password confirmation',
        },
      ],
    });
  }

  User.findOne({ email }, (error, existingUser) => {
    if (error) {
      return res.status(422).send({
        errors: [
          {
            title: 'DataBase Error',
            detail: 'Oops something went wrong',
          },
        ],
      });
    }

    if (existingUser) {
      return res.status(422).send({
        errors: [
          {
            title: 'Invalid Email',
            detail: 'User with provided email already exists',
          },
        ],
      });
    }

    const user = new User({ username, email, password });
    user.save((error) => {
      if (error) {
        return res
          .status(422)
          .send({
            errors: [
              {
                title: 'Invalid Email',
                detail: 'User with provided email already exists',
              },
            ],
          });
      }
      return res.json({ status: 'registered' });
    });
  });
};
