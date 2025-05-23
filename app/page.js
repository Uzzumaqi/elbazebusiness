"use client";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState("");
  useEffect(()=>{
    async function fetchNumber() {
      const { data } = await supabase.from("whatsappNum").select("number").eq('id', 1).single()
      setNumber(data.number);
    }
    fetchNumber()
  },[])
  const handelChange = (event) => {
    setName(event.target.value);
  }
  const handelAgeChange = (event) => {
    setAge(event.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    var phoneNumber = number;
    var url = `https://wa.me/${phoneNumber}?text=${name}%0a${age}%0a${price}`;
    window.open(url, '_blank').focus();
  }
  const webVideo = "/(images)/nkin.mp4";
  const poster = '/(images)/miniature.jpg';
  return (
    <div>
      <header></header>
      <div className="sub-header">
        أجب على هاته الأسئلة لتعرف إن كنت مؤهلا أم لا
      </div>
      <main>
        <form onSubmit={submitHandler}>
          {page == 0 ?
          <h2>ما هو رأس المال الذي تريد أن تبدأ به ؟</h2> : null}
          <div>
            {page == 0 ? (
              <>
                <button
                  onClick={() => {
                    setPage(1);
                    setPrice("0 درهم");
                  }}
                >
                  {" "}
                  0 درهم
                </button>
                <button
                  onClick={() => {
                    setPage(1);
                    setPrice("3000 درهم");
                  }}
                >
                  {" "}
                  3000 درهم
                </button>
                <button
                  onClick={() => {
                    setPage(1);
                    setPrice("4000 درهم");
                  }}
                >
                  {" "}
                  4000 درهم
                </button>
                <button
                  onClick={() => {
                    setPage(1);
                    setPrice("5000 درهم");
                  }}
                >
                  {" "}
                  5000 درهم
                </button>
              </>
            ) : page == 1 ? (
              <>
                <input
                  type="text"
                  placeholder="ادخل اسمك هنا  "
                  value={name}
                  onChange={handelChange}
                  required
                />
                <input
                  type="number"
                  placeholder="ادخل عمرك "
                  max="150"
                  value={age}
                  onChange={handelAgeChange}
                  required
                />
                <div className="go-btn">
                  <button>متابعة</button>
                </div>
                <div className="back-btn">
                  <button
                    onClick={() => {
                      setPage(0);
                      setPrice("");
                      setName("");
                      setAge("");
                    }}
                  >
                    العودة
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </form>
        <section>
          <div className="valide">
            <p>ابدأ الآن وانطلق في مشروعك الخاص</p>
            <p>أحصل على مواكبة و تأطير و طريقة العمل حصرية</p>
            <p>إنضم إلى مجتمع رواد الأعمال</p>
          </div>
          <div className="video-container">
            <h2>إكتشف قصة نجاحي، و كيف كانت البداية</h2>
            <video controls width="640" height="360" poster={poster}>
              <source src={webVideo} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
      <footer>
        <span>elbazebusiness جميع الحقوق محفوظة ©</span>
        <a href="https://www.mediavire.com" dir="rtl">هذا الموقع صمم من طرف وكالة MediaVire</a>
      </footer>
    </div>
  );
}
