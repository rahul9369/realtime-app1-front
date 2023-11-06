import React, { useEffect, useState } from "react";
import New from "./New";
import "./Bloglist.css";
import axios from "axios";

function Cardlist() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get("/blogs").then((res) => {
      // console.log(res);
      setBlog(res.data);
    });
  }, []);
  console.log(blog);
  let bloglist = blog.map((b) => {
    return (
      <New key={b._id} id={b._id} author={b.author} img={b.img} desc={b.desc} />
    );
  });

  return <div className="Bloglist">{bloglist}</div>;
}

export default Cardlist;
