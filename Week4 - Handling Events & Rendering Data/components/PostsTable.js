import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function PostsTable(){

    const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

    function rowClicked(e, id){
        console.log(id);
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <tr><td colSpan="3">Loading ...</td></tr> : data.map(post=>
                    <tr key={post.id} onClick={e=>{rowClicked(e, post.id)}} >
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )}   
            </tbody>
        </table>
    </>);
}