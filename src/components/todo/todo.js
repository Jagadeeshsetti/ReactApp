import { Component } from "react";


class Todos extends Component {

    state={
        todos:["eat apple","eat banana"],
        newFruit: "eat pineapple",
    };

    addNewFruit=()=>{
        this.setState({
            todos:[...this.state.todos, this.state.newFruit],

        })
    }

    deleteFruit=(index)=>{


        const newList = this.state.todos.filter((each,i)=>{

         return index!==i

        })

        // const newList=this.state.todos
        // newList.splice(index,1);
        // console.log(newList,"newList")

        this.setState({
            todos: newList,
        })

    };

    updateFruit=(index)=>{
        console.log("index",index);

        const random = "eat watermelon";

        console.log(this.state.todos);
        const updatedTodos = this.state.todos.map((eachFruit,i)=>{
            if(index===i){
                return random
            }
            else{
                return eachFruit
            }

        });
this.setState({
    todos: updatedTodos,
});

        console.log(updatedTodos);
    };

    render() {
        return (
        <>
        <button  onClick={this.addNewFruit}>Click to add new fruit</button>
        <ol>

        {
            this.state.todos.map((eachTodo, index)=>{
                return(
                    <>

                  <li>{eachTodo}</li>
                  <button    onClick={()=> this.deleteFruit(index)}>delete</button>
                  <button    onClick={()=> this.updateFruit(index)}>update</button>

                    </>
                )
            })
        }

        </ol>

        </>
        );
    }
}

export default Todos;