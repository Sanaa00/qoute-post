import "./App.css";
import AddPostForm from "./features/AddPostForm";
import PostList from "./features/PostList";

function App() {
  return (
    <div className="px-6 bg-no-repeat	bg-cover bg-[url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')] min-h-screen flex justify-center ">
      <div className="mt-20">
        <p className="text-5xl font-bold text-purpley text-center drop-shadow">
          Qoutes
        </p>
        <AddPostForm />
        <PostList />
      </div>
    </div>
  );
}

export default App;
