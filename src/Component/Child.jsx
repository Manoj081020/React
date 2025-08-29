

function Child({updateParentText}){
    return(
        <div>
            <button onClick={()=>updateParentText("updated from child")}>parent text</button>
        </div>
    )

}
export default Child