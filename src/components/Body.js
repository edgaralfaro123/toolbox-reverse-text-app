import React from 'react'
const Body = ({data}) => {
    const formatedPalindrome=(isPalindrome)=>{
        return isPalindrome ? 'Verdadero' : 'Falso'
    }
    return (
        <div className="row">
            <h3 className="ml-3 font-weight-bold">Resultados</h3>
            <table className="table mb-5 ml-3 mr-3">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Texto</th>
                        <th scope="col">Texto invertido</th>
                        <th scope="col">Palindromo</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item,key)=>(
                    <tr key={key+1}>
                        <th scope="row">{key+1}</th>
                        <td>{item.textoriginal}</td>
                        <td>{item.text}</td>
                        <td>{formatedPalindrome(item.palindrome)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Body;