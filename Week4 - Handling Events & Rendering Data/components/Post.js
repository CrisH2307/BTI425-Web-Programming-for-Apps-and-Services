// import { useState, useEffect } from "react";

// export default function Post(){

//     const [data, setData] = useState(null);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.json()).then(post=>{
//             setData(post);
//         });       
//     }, [])

//     return (<>
//         <strong>ID</strong>: {data?.id}<br />
//         <strong>Title</strong>: {data?.title}<br />
//         <strong>Body</strong>: {data?.body}
//     </>);

// }

// re-write using SWR

// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json()); 

// export default function Post() {

//     const {data, error} = useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher)

//     return (<>
//         <strong>ID</strong>: {data?.id}<br />
//         <strong>Title</strong>: {data?.title}<br />
//         <strong>Body</strong>: {data?.body}
//     </>);

// }

// re-write using props (static data from "Home" component)

export default function Post({data}) {

    return (<>
        <strong>ID</strong>: {data?.id}<br />
        <strong>Title</strong>: {data?.title}<br />
        <strong>Body</strong>: {data?.body}
    </>);

}