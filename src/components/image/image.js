import { Component } from "react";



class ImageComponent extends Component {
    render() {
        
        return   <img src={this.props.src} width={150}  height={150} />
        
    }
}
export default ImageComponent










// const ImageComponent = () =>{
//     return(
//         <div>
//        <img src="https://cdn.dummyjson.com/recipe-images/1.webp"  width="150px" />
//         </div>
//     )
// }
// export default ImageComponent