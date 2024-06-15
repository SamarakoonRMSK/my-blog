import image from "../assets/travel.png";
import stdman from "../assets/stdman.png";

export const projects = [
  {
    title: "Blog Web Application",
    image:
      "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
    dis: "A blog app using the MERN stack with secure JWT and Google authentication. Efficient state management via Redux Toolkit. Users can create, edit, and delete posts, and comment on articles.",
    technology: [
      "JavaScript",
      "Mongodb",
      "ExpressJS",
      "React",
      "NodeJs",
      "Tailwind CSS",
    ],
    link: "https://github.com/SamarakoonRMSK/my-blog",
  },
  {
    title: "Food Ordering System",
    image:
      "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
    dis: "A GUI-based food ordering system built with Python and PyQt. It allows restaurants to manage menus and food items, handle orders, and streamline the ordering process with an intuitive interface.",
    technology: ["Python", "PyQt"],
    link: "https://github.com/SamarakoonRMSK/PST31130/tree/main/Student%20Management%20System%20(GUI%20-%20Tkinter)",
  },
  {
    title: "Student Management System",
    image: stdman,
    dis: "A simple student management system using Python and Tkinter. It supports CRUD operations for managing student records with an easy-to-use graphical interface.",
    technology: ["Python", "Tkinter"],
    link: "https://github.com/SamarakoonRMSK/PST31130/tree/main/Student%20Management%20System%20(GUI%20-%20Tkinter)",
  },
  {
    title: "Travel Web Site",
    image: image,
    dis: "A captivating travel website designed with HTML and CSS. Explore destinations, view itineraries, and discover travel packages in a visually appealing format.",
    technology: ["HTML", "CSS"],
    link: "https://github.com/SamarakoonRMSK/travel-html-css",
  },
  {
    title: "Parking Management (CLI)",
    image:
      "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
    dis: "Manage parking spaces via CLI using linked lists for adding, removing, and displaying vehicles.",
    technology: ["C Programming", "Linked list"],
    link: "https://github.com/SamarakoonRMSK/mini-project",
  },
  {
    title: "Redux",
    image:
      "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
    dis: "Redux example",
    technology: ["JavaScript", "React", "Redux"],
  },
];
