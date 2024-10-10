import User from '../models/User.js';

const saveContact = async (contact) => {
    const newUser = new User({
      phone_number: contact.phone_number,
      first_name: contact.first_name,
      user_id: contact.user_id,
    });
    await newUser.save();
    console.log(saveContact);
  };
  
  export { saveContact };