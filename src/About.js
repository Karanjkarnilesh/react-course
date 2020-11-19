import React from 'react';

class About extends React.Component{
constructor()
{
    super();
    console.warn(this.props);
}
componentDidMount()
{
    console.warn(this.props.name);
    // console.warn(' Didmount');
}
componentDidUpdate()
{
// alert('Name is Update')
console.warn("props in upate",this.props.name);

}
    render()
{
return(<div>
    <h1>Hello About</h1><h2>{this.props.name}</h2>
</div>)

}

}

export default About;