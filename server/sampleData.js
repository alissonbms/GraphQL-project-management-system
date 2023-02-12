import mongoose from "mongoose";

const clientIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const projectIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

//CLIENTS
export const clients = [
  {
    _id: clientIds[0],
    name: "Tony Stark",
    email: "ironman@gmail.com",
    phone: "343-567-4333",
    __v: 0,
  },
  {
    _id: clientIds[1],
    name: "Natasha Romanova",
    email: "blackwidow@gmail.com",
    phone: "223-567-3322",
    __v: 0,
  },
  {
    _id: clientIds[2],
    name: "Thor Odinson",
    email: "thor@gmail.com",
    phone: "324-331-4333",
    __v: 0,
  },
  {
    _id: clientIds[3],
    name: "Steve Rogers",
    email: "steve@gmail.com",
    phone: "344-562-6787",
    __v: 0,
  },
  {
    _id: clientIds[4],
    name: "Bruce Banner",
    email: "bruce@gmail.com",
    phone: "321-468-8887",
    __v: 0,
  },
];
//PROJECTS

export const projects = [
  {
    _id: projectIds[0],
    clientId: clientIds[0],
    name: "eCommerce Website",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "In Progress",
    __v: 0,
  },
  {
    _id: projectIds[1],
    clientId: clientIds[1],
    name: "Dating App",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "Not Started",
    __v: 0,
  },
  {
    _id: projectIds[2],
    clientId: clientIds[2],
    name: "SEO Project",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "In Progress",
    __v: 0,
  },
  {
    _id: projectIds[3],
    clientId: clientIds[3],
    name: "Design Prototype",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "Completed",
    __v: 0,
  },
  {
    _id: projectIds[4],
    clientId: clientIds[4],
    name: "Auction Website",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
    status: "Not Started",
    __v: 0,
  },
];
