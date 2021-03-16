const users = [];

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();

  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  //Check for existing users
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //Validate Username
  if (existingUser) {
    return {
      error: "Username already exists",
    };
  }

  //Store the user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });

  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  return user;
};

const getUsersInRoom = (room) => {
  const usersInRoom = users.filter((user) => {
    return user.room === room;
  });

  return usersInRoom;
};

module.exports = {
  addUser,
  removeUser,
  getUsersInRoom,
  getUser,
};
