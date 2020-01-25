import React, {Component} from "react";
import {toggle} from "../redux/action/toggleItems";
import {query} from "../redux/action/searchQuery";
import {useDispatch} from "react-redux";

function Navbarfn() {
    const dispatch = useDispatch();
    return <Navbar dispatch={dispatch}/>
}
class Navbar extends Component {
    constructor(){
       super()
       this.animate = this.animate.bind()
    }
    state = {
        animate: false
    }
   animate=(e)=>{
        e.preventDefault()
    this.setState({animate:true})
    this.props.dispatch(toggle())
    }
    submit =()=>{
    }
    setQuery = (event)=>{
        console.log(event.target.value)
        this.props.dispatch(query(event.target.value))
    }
    render() {
        return (
            <div className={this.state.animate? 'classname':'mynavbar'}>
                {!this.state.animate? <button onClick={(e)=>this.animate(e)} ><i className="fab fa-searchengin fa-10x myicon"></i></button>:<div></div>}
                <div className="mysearch">
                    {this.state.animate?

                        <form className="form-inline md-form form-sm active-cyan-2 mt-2" onSubmit={(e)=>this.animate(e)}>
                        <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" onChange={(e)=>this.setQuery(e)}/>
                            <button><i className="fab fa-searchengin fa-2x "></i></button>
                        </form>
                        :
                        <form onSubmit={(e)=>this.animate(e)}>
                            <input className="form-control mt-3"
                                   type="text" placeholder="Search"
                                   aria-label="Search" name="search" onChange={(e)=>this.setQuery(e)}/>
                        </form>
                    }

                </div>
            </div>

        )
    }
}

export default Navbarfn;
