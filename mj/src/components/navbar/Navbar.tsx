
"use client";

import {  Navbar } from "flowbite-react";

import './Navbar.css'
export function Component() {
  return (
    <Navbar fluid rounded className="fixed top-0 w-full z-10">
      <Navbar.Brand href="/">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MJ</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
       
        <Navbar.Toggle />
      </div>
      <div className="navlink">
      <Navbar.Collapse>
       
        <Navbar.Link href="/" className="link text-pink-600">
          Home
        </Navbar.Link>
        <Navbar.Link href="#cheer">Message</Navbar.Link>
        <Navbar.Link href="#gallery">Gallery</Navbar.Link>
        <Navbar.Link href="#reminder">Reminder</Navbar.Link>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
