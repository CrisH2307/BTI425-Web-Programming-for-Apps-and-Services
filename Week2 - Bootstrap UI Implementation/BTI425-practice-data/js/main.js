function populatePostsTable(userId = null) {
  let url = +userId // attempt to convert userId to a number
    ? `https://jsonplaceholder.typicode.com/posts?userId=${+userId}`
    : `https://jsonplaceholder.typicode.com/posts`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let postRows = `
        ${data
          .map(
            (post) =>
              `<tr data-id=${post.id}>
              <td>${post.userId}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
          </tr>`
          )
          .join("")}
      `;

      document.querySelector("#postsTable tbody").innerHTML = postRows;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // TODO: Add event listeners, like clicking on a row, etc
  populatePostsTable();

  // submit event

  document.querySelector("#searchForm").addEventListener("submit", (event) => {
    // prevent the form from from 'officially' submitting
    event.preventDefault();

    let userId = document.querySelector("#userId").value;

    populatePostsTable(userId);

    // add an event to the tbody element and try to get the clicked inner tr
  });

  // table row event

  document
    .querySelector("#postsTable tbody")
    .addEventListener("click", (event) => {
      let clickedId = event.target.closest("tr").getAttribute("data-id");
      console.log(clickedId);

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${clickedId}`)
        .then((res) => res.json())
        .then((data) => {
          let commentsList = `
          <ul class="list-group">
            ${data
              .map(
                (comment) => `
              <li class="list-group-item">
                ${comment.body}<br /><br />
                <strong>Name:</strong> ${comment.name}<br />
                <strong>Email:</strong> ${comment.email}<br />
              </li>
            `
              )
              .join("")}
          </ul>
        `;

          document.querySelector("#commentsModal .modal-body").innerHTML =
            commentsList;

          let myModal = new bootstrap.Modal(
            document.getElementById("commentsModal"),
            {
              backdrop: "static", // default true - "static" indicates that clicking on the backdrop will not close the modal window
              keyboard: false, // default true - false indicates that pressing on the "esc" key will not close the modal window
              focus: true, // default true - this instructs the browser to place the modal window in focus when initialized
            }
          );

          myModal.show();
        });
    });

  // let nums = ["One", "Two", "Three"];
  // let numsList = `<ul>${nums.map(n=>`<li>${n}</li>`).join("")}</ul>`;
  // console.log(numsList);
});
