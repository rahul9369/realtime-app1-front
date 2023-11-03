import React from "react";
import Card from "./Card";
import axios from "axios";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { useState, useEffect } from "react";

function CardList() {
  const [blog, setBlog] = useState([]);
  const [tempBlog, setTempBlog] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [sortNum, setSortNum] = useState(false);

  useEffect(() => {
    axios.get("/prod1").then((res) => {
      //   console.log(res);
      setBlog(res.data);
      setTempBlog(res.data);
    });
  }, []);

  function find(p) {
    let s = search.toLowerCase();
    if (p.title.indexOf(s) == -1) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    setTempBlog(blog.filter(find));
  }, [search]);

  useEffect(() => {
    const arr = tempBlog;
    setTempBlog(arr.sort(compare));
  }, [sortNum]);

  let blogList = tempBlog.map((b) => {
    return (
      <Card
        id={b._id}
        key={b._id}
        title={b.title}
        img={b.img}
        desc={b.desc}
        price={b.price}
      />
    );
  });

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const clickHandler = (e) => {
    setToggle(!toggle);
    console.log(toggle);
  };

  function compare(a, b) {
    return a.price - b.price;
  }

  const SortHandler = (e) => {
    setSortNum(!sortNum);
  };

  return (
    <TitleWrap>
      <Navbar>
        <Navname>ShopCart</Navname>
        <Navbrand>
          <Navlist>Home</Navlist>
          <Navlist>Products</Navlist>

          <Form onSubmit={SubmitHandler}>
            <Search onChange={changeHandler}></Search>
          </Form>

          {search === "" ? (
            ""
          ) : (
            <Wrapfilter>
              <Filter onClick={clickHandler}>
                Filter
                <AiFillCaretDown style={{ margin: "1px 0px" }} />
              </Filter>

              {toggle === false ? (
                ""
              ) : (
                <Filterdiv>
                  <Fdiv onClick={SortHandler}>By price</Fdiv>
                </Filterdiv>
              )}
            </Wrapfilter>
          )}
        </Navbrand>
      </Navbar>
      <Title>{tempBlog.length == 0 ? " 404 NOT FOUND!!" : blogList}</Title>
    </TitleWrap>
  );
}

export default CardList;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;
const Navbar = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: row;
`;
const Navname = styled.h2`
  font-size: 50px;
  margin: 10px;
`;
const Navbrand = styled.ul`
  display: flex;
  flex-direction: row;
`;
const Navlist = styled.li`
  margin: 25px;
  list-style: none;
`;
const Search = styled.input`
  height: 30px;
  width: 200px;
  margin: 20px;
  border-radius: 20px;
`;

const Form = styled.form``;

const Filter = styled.p`
  margin: 25px 2px;
`;

const Wrapfilter = styled.div`
  display: flex;
  justify-content: right;
  &:hover {
    cursor: pointer;
  }
`;

const Filterdiv = styled.div`
  background-color: yellow;
  border: 2px solid black;
  position: absolute;
  top: 70px;
  left: 710px;
  height: 100px;
  width: 100px;
`;
const Fdiv = styled.div`
  margin: 2px 3px;
  border: 2px solid red;
`;

const TitleWrap = styled.div`
  margin: 10px;
`;
