//전역변수
const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookdentForm = document.getElementById("bookForm");
const bookTableBody = document.getElementById("bookTableBody");

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
  loadBooks();
});

//Form Submit 이벤트 처리하기
bookForm.addEventListener("submit", function (event) {
  //기본으로 설정된 Event가 동작하지 않도록 하기 위함
  event.preventDefault();
  console.log("Form 제출 되었음...");

  //FormData 객체생성 <form>엘리먼트를 객체로 변환
  const bookFormData = new FormData(bookForm);
  // bookFormData.forEach((value, key) => {
  //   console.log(key + " = " + value);
  // });

  //사용자 정의 Book 객체 생성 (공백제거)
  const bookData = {
    title: bookFormData.get("title").trim(),
    author: bookFormData.get("author").trim(),
    isbn: bookFormData.get("isbn").trim(),
    price: bookFormData.get("price").trim(),
    publishDate: bookFormData.get("publishDate"),
  };

  //유효성 체크하기
  if (!validateBook(bookData)) {
    //검증체크 실패하면 리턴하기
    return;
  }
  //유효한 데이터 출력하기
  console.log(bookData);
});

//데이터 유효성을 체크하는 함수
function validateBook(book) {// 필수 필드 검사
    if (!book.title) {
        alert("제목을 입력해주세요.");
        return false;
    }

    if (!book.author) {
        alert("작가를 입력해주세요.");
        return false;
    }

    if (!book.isbn) {
        alert("isbn을 입력해주세요.");
        return false;
    }

    if (!book.price) {
        alert("가격을 입력해주세요.");
        return false;
    }

    const isbnPattern = /^[0-9]+$/;
    if (!isbnPattern.test(book.isbn)) {
        alert("올바른 isbn 형식이 아닙니다.");
        return false;
    }

    return true;
}//validateBook

//도서목록 로드하는 함수
function loadBooks() {
  console.log("도서 목록 로드 중.....");
}
