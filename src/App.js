import React, { Component, useEffect, useState }  from 'react'
import Naav from './Components/Naav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Card} from 'react-bootstrap'
import {Routes,Route, useNavigate, useLocation} from 'react-router-dom'
import Shop from './Components/Shop';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import t1 from './Photos/Photos/t1.jpg'
import t2 from './Photos/Photos/t2.jpg'
import t3 from './Photos/Photos/t3.jpg'
import t4 from './Photos/Photos/t4.jpg'
import shopC1 from './Photos/Photos/shopC1.jpg'
import shopC2 from './Photos/Photos/shopC2.jpg'
import shopC3 from './Photos/Photos/shopC3.jpg'
import shopC4 from './Photos/Photos/shopC4.jpg'
import shopC5 from './Photos/Photos/shopC5.jpg'
import shopC6 from './Photos/Photos/shopC6.jpg'
import shopC7 from './Photos/Photos/shopC7.jpg'
import shopC8 from './Photos/Photos/shopC8.jpg'
import t5 from './Photos/Photos/t5.jpg'
import Pay from './Components/Pay';
import axios from 'axios'
import Swal from 'sweetalert2'
import ControlPanel from './Components/AdminInterface/ControlPanel';
import Products from './Components/AdminInterface/Products';
import Users from './Components/AdminInterface/Users';
import SideBar from './Components/AdminInterface/SideBar';
import NewProduct from './Components/AdminInterface/NewProduct';
import ProductDetails from './Components/AdminInterface/ProductDetails';
import EditProduct from './Components/AdminInterface/EditProduct';
import NewUser from './Components/AdminInterface/NewUser';
import UserDetails from './Components/AdminInterface/UserDetails';
import EditUsers from './Components/AdminInterface/EditUsers';
import Dashboard from './Components/AdminInterface/Dashboard';

const App =()=>   {
  
 
  const [products1,setProducts1]=useState([
    {id:0 , name:'Quilted Gilet with Hood',price:150.00,img:t1,count:'1'},
    {id:1 , name:'Quilted Gilet with Hood',price:110.00,img:t2,count:'1'},
    {id:2 , name:'Quilted Gilet with Hood',price:200.00,img:t3,count:'1'},
    {id:3 , name:'Quilted Gilet with Hood',price:250.00,img:t4,count:'1'}
    
   ]);
   const [products,setProducts]=useState([
    {id:0 , name:'shirt',price:200.00,img:shopC2,count:'1'},
    {id:1 , name:'shirt',price:210.00,img:shopC3,count:'1'},
    {id:2 , name:'shirt',price:250.00,img:shopC4,count:'1'},
    {id:3 , name:'shirt',price:220.00,img:shopC5,count:'1'},
    {id:4 , name:'shirt',price:230.00,img:shopC6,count:'1'},
    {id:5 , name:'shirt',price:200.00,img:t5,count:'1'},
    {id:6 , name:'Hood',price:105.00,img:shopC1,count:'1'},
    {id:7 , name:'Jeans',price:300.00,img:shopC7,count:'1'},
    {id:8 , name:'Jeans',price:320.00,img:shopC8,count:'1'},
   ])
  
const [cart1,setCart1] = useState([])
  
const [cart,setCart]=useState([])

const [price,setPrice] = useState([])

const [firstName,setFirstName] = useState('')
const[firstNameError,setFirstNameError]= useState('First Name')
const [SecondName,setSecondName] = useState('')
const[secondNameError,setSecondNameError]= useState('Second Name')
const [phoneNumber,setPhoneNumber] = useState('')
const[phoneNumberError,setPhoneNumberError]= useState('Phone Number')
const [email,setEmail] = useState('')
const[emailError,setEmailError]= useState('Email Address')
const [password,setPassword] = useState('')
const [Age,setAge] = useState(0)
const[passwordError,setPasswordError]= useState('Password')
const[ageError,setAgeError]=useState('Age')
const [cardNumber,setCardNumber] = useState(0)
const [cardNumberError,setCardNumberError] = useState('Credit Card Number')
const [cardName,setCardName] = useState('')
const [cardNameError,setCardNameError]=useState('Name on Card')
const [cvv,setCvv] = useState('')
const[cvvError,setCvvError] = useState('CVV')
const [cardDate,setCardDate]=useState('')
const [cardDateError,setCardDateError]=useState('Expiration Date')
 const [incorrect,setIncorrect]=useState('')
 const [incorrect1,setIncorrect1]=useState('')
const [signin,setSignIn] =useState('Sign in')
const [type,setType] = useState ('user')
const[controlPanel,setControlPanel]=useState('')
const[getMail,setGetMail]=useState([])
const[getPass,setGetPass]=useState([])
const [getPanel,setGetPanel]=useState([])
const [getPanel1,setGetPanel1]= useState([])
const [checkLogn,setCheckLogn]=useState({})
const [checkPass,setCheckPass]=useState('')
const [checkSignIn, setCheckSignIn] = useState(false);
const[checkError,setCheckError] = useState([])
const [productName,setProductName]=useState([])
const [productPrice,setProductPrice]=useState([])
const [productItems,setProductItems]=useState([])
const[productImage,setProductImage] = useState([])
const [newProducts,setNewProducts] = useState([])
const [userName,setUserName]=useState('')
const [userNameError,setUserNameError]=useState('First Name')
const[userMail,setUserMail]=useState('')
const [userMailError,setUserMailError]=useState('Email')
const[userPassword,setUserPassword]=useState('')
const [userPasswordError,setUserPasswordError]=useState('Password')
const[newName,setNewName]=useState('')
const[newNameError,setNewNameError]=useState('Second Name')
const[gender,setGender]=useState('')
const[userAge,setUserAge]=useState('') 
const [userAgeError,setUserAgeError]=useState('Age')
const[userRole,setUserRole]=useState('')
const[userRoleError,setUserRoleError]=useState('Role')
const[userPhoneNumber,setUserPhoneNumber]=useState('')
const [userPhoneNumberError,setUserPhoneNumberError]=useState('Phone Number')
const [admin,setAdmin]=useState('admin')
const [user,setUser]= useState('user')
const[newUsers,setNewUsers]=useState([])

const add1 = (obj)=>{
 
    let Data = cart1.map((e)=>{
      if(e.id!==obj.id){
        return e
      }else {
       return e.count++;
      }
    })
    Swal.fire('Item has been added!')
    setCart1([...Data,obj])
 }

 let l = cart1.filter((e)=>{
  return isNaN(e)
 })
 
 

 
    
   
     const   add = (ob)=>{
      let Data = cart.map((n)=>{
        if(n.id!==ob.id){
          return n
        }else {
         return n.count++;
        }
      })
      Swal.fire('Item has been added!')
      setCart([...Data,ob])
   }
  
   let f = cart.filter((n)=>{
    return isNaN(n)
   })

       const inc1=(x)=>{
        let Data1 = products1.map((e)=>{
          if(e.id===x.id){
            e.count++;
            
          }
          return e
        })
        setProducts1(Data1)
       }
       const dec1=(y)=>{
        let Data1 = products1.map((e)=>{
          if(e.id===y.id &&e.count>0){
            e.count--;
            
          }
          return e
        })
        setProducts1(Data1)
      }
      const inc=(x)=>{
        let Data = products.map((n)=>{
          if(n.id===x.id){
            n.count++;
            
          }
          return n
        })
        setProducts(Data)
       }
       const dec=(y)=>{
        let Data = products.map((n)=>{
          if(n.id===y.id &&n.count>0){
            n.count--;
            
          }
          return n
        })
        setProducts(Data)
      

      }

      const del1 = (x)=>{
      
        let Data1=cart1.map((e)=>{
          if(e.id==x.id){
            return e.count=1
          }
        })
        

      let v=  cart1.filter((e)=>{
          return e!==x
        })
       setCart1(v)
      }

      const del = (y)=>{
        let Data1=cart.map((n)=>{
          if(n.id==y.id){
            return n.count=1
          }
        })
        let Data = cart.filter((n)=>{
          return n!==y
        })
        setCart(Data)
      }
       
        
    
      

      const total=()=>{
        let data = l.reduce((x,y)=>{return x+y.price*y.count},0 ) + f.reduce((e,n)=>{return e+n.price*n.count},0 )
       
      setPrice(data)
      }

      const navigate = useNavigate()
      const location = useLocation()
     
      useEffect(()=>{
        axios({
          method:'get',
          url:'http://localhost:9000/users'
        }).then((e)=>{
        let x=   e.data.map((r)=>{
           return r.EmailAddress
          })
          setGetMail(x)
         
        })
      },[])
      useEffect(()=>{
        axios({
          method:'get',
          url:'http://localhost:9000/users'
        }).then((e)=>{
        let x=   e.data.map((r)=>{
           return r.password
          })
          setGetPass(x)
         
        })
      },[])
            


      const FormSubmit =(e)=>{
       
        e.preventDefault();
       
        

        if(firstName===''|| !isNaN(firstName) ){
          setFirstNameError('invalid First Name')
        }else if(SecondName===''||!isNaN(SecondName)) {
          setFirstNameError('First Name');
          setSecondNameError('invalid Second Name')
          
        }else if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          setFirstNameError('First Name');
          setSecondNameError('Second Name');
          setEmailError('invalid Email Address')

        } else if (!phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
          setFirstNameError('First Name');
          setSecondNameError('Second Name');
          setEmailError('Email Address');
          setPhoneNumberError('invalid Phone Number');
          
        }else if (password.length<6){
          setFirstNameError('First Name');
          setSecondNameError('Second Name');
          setEmailError('Email Address');
          setPhoneNumberError('Phone Number');
          setPasswordError('invalid Password')

        }else if(Age==0){
          setFirstNameError('First Name');
          setSecondNameError('Second Name');
          setEmailError('Email Address');
          setPhoneNumberError('Phone Number');
          setPasswordError(' Password')
          setAgeError('invalid Age')
        }
       else if(getMail.indexOf(email)!==-1) {
      
        setIncorrect1('email is already exist')
                  setFirstNameError('First Name');
                  setSecondNameError('Second Name');
                  setEmailError('Email Address');
                  setPhoneNumberError('Phone Number');
                  setPasswordError(' Password');
                  setAgeError('Age')
                  
                  setEmail('');
                  setPassword('');
            
               
                
            
          }else{
                        axios({
              method:'post',
              url:'http://localhost:9000/users',
              data:{
                firstName: firstName,
                SecondName: SecondName,
                EmailAddress: email,
                phoneNumber: phoneNumber,
                type: type,
                password: password,
                age:Age,
              }

            })
            setIncorrect1('')
            setFirstName('')
            setSecondName('')
            setPhoneNumber('')
            setEmail('');
            setPassword('');
            setAgeError('Age')
            setAge(0)
            navigate('/')
          }
        

       
       
      
      
      }
         
        
              
      
       
          
       
        
      
    
    
    
      const changeFirstName=(e)=>{
        setFirstName(e.target.value)
      }
      const changeSecondName=(e)=>{
        setSecondName(e.target.value)
              }
       const changePhone=(e)=>{
       setPhoneNumber(e.target.value)
                      }
      const changeEmailAdress=(e)=>{
       setEmail(e.target.value) }
       const changePassword=(e)=>{
       setPassword(e.target.value)}
        const changeAge=(e)=>{
          setAge(e.target.value)
        }
       const changeCardName =(e)=>{
        setCardName(e.target.value)
       }
       const changeCardNumber=(e)=>{
        setCardNumber(e.target.value)
       }
       const changeCvv =(e)=>{
        setCvv(e.target.value)
       }
       const changeCardDate=(e)=>{
        setCardDate(e.target.value)
       }

       const changeEmailAdress3=(objj)=>{
        setEmail(objj.target.value)
       }
       const changePassword3=(objj)=>{
        setPassword(objj.target.value)
       }

       const changeProductName=(e)=>{
        setProductName(e.target.value)
       }

       const changeProductPrice = (e)=>{
        setProductPrice(e.target.value)
       }

       const changeProductImage = (e)=>{
        setProductImage(e.target.value)
       }
       const changeProductItems = (e)=>{
        setProductItems(e.target.value)
       }

       const changeUserName =(e)=>{
        setUserName(e.target.value)
       }

       const changeUserMail =(e)=>{
        setUserMail(e.target.value)
       }
       const changeUserPassword = (e)=>{
        setUserPassword(e.target.value)
       }
       const changeNewName =(e)=>{
        setNewName(e.target.value)
       }
       const changeGender =(e)=>{
        setGender(e.target.value)
       }
       const changeUserAge = (e)=>{
        setUserAge(e.target.value)
       }
       const changeUserRole =(e)=>{
        setUserRole(e.target.value)
       }
       const changeUserPhoneNumber=(e)=>{
        setUserPhoneNumber(e.target.value)
       }
        
       const FormSubmit1 =(e)=>{
       
        e.preventDefault();
        const regularExp= /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
        if(cardName==''||!isNaN(cardName)){

          setCardNameError('invalid Name')

        }else if(cardNumber==''||isNaN(cardNumber)||!cardNumber.match(regularExp)){
          

          setCardNameError('Name on Card')
          setCardNumberError('invalid Number')
        }else if (cvv==''|| isNaN(cvv)||cvv.length!==3){
          setCardNameError('Name on Card')
          setCardNumberError('Credit Card Number')
          setCvvError('invalid CVV')
        } else {
          setCardName('')
          setCardNumber('')
          setCvv('')
          setCvvError(' CVV')
          navigate('/')
        }
      }





        

          
        


        
      
   
          
        
      

      const FormSubmit3=(e)=>{
        e.preventDefault();
      
        axios({
          method:'get',
          url:`http://localhost:9000/users`,
        }).then((user)=>{
          user.data.map((e)=>{
            
            if(e.EmailAddress==email){
              if(e.password==password){
                
                 navigate('/')
                 
                  setEmail('')
                  setPassword('')
                  setSignIn('Sign out')
                 setCheckError(e.type)
                  
                  
                 
              
              }
            
            } else if(getMail.indexOf(email)!==-1){
              setIncorrect('Email or Password is incorrect')
            }else {
              setIncorrect('Email or Password is incorrect')
            }
          })})
        

      
        
        
        
        
        
        }
            


        
      
        
      
   


    

  

      const FormSubmit4 = ()=>{

        if(signin=='Sign out'){
          
          setSignIn('Sign in');
          setEmail('');
          setPassword('')
          setIncorrect('')
          setControlPanel('')
          setCheckError('')
         
        }
      }

      const FormSubmit5 =(e)=>{
        e.preventDefault();
        if (productName!==''){ axios({
          
          method:'post',
          url:'http://localhost:9000/products',
          data : {
            productName : productName,
            productPrice: productPrice,
            productImage:productImage,
            productItems :productItems,
          }
        })
        
        getData()
        
        
        navigate('/products')
      }}
       
      const FormSubmit7 =(e)=>{
        
        e.preventDefault();

        if(userName===''|| !isNaN(userName) ){
          setUserNameError('invalid First Name')
        }else if(newName===''||!isNaN(newName)) {
          setUserNameError('First Name');
          setNewNameError('invalid Second Name')
          
        }else if (!userMail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          setUserNameError('First Name');
          setNewNameError(' Second Name')
          setUserMailError('invalid Email Address')

        
          
        }else if (userPassword.length<6){
          setUserNameError('First Name');
          setNewNameError(' Second Name')
          setUserMailError(' Email Address')
  
          setUserPasswordError('invalid Password')

        
       
            
               
                
            
          }else if(userAge==0){
            setUserNameError('First Name');
            setNewNameError(' Second Name')
            setUserMailError(' Email Address')
            setUserPasswordError(' Password')
            setUserAgeError('invalid Age')
          }else if (!userPhoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            setFirstNameError('First Name');
            setSecondNameError('Second Name');
            setEmailError('Email Address');
            setPhoneNumberError('invalid Phone Number');
           } else{
                        axios({
              method:'post',
              url:'http://localhost:9000/users',
              data:{
                firstName: userName,
                SecondName: newName,
                EmailAddress: userMail,
                phoneNumber: userPhoneNumber,
                type: userRole,
                Age:userAge,
                password: userPassword,
              }

            })
            setUserName('')
            setNewName('')
            setUserPhoneNumber('')
            setUserMail('');
            setUserPassword('');
            navigate('/users')
          }
        getUsersData()

      }

      const getUsersData = ()=>{
        axios({
          method:'get',
          url:'http://localhost:9000/users'
        }).then((user)=>{
          setNewUsers(user.data);
        })
      }

      

      useEffect(()=>{
        getUsersData()
      },[])

      const getData = ()=>{
        axios({
          method:'get',
          url:'http://localhost:9000/products'
        }).then((product)=>{
          setNewProducts(product.data)
        })
      }

      useEffect(()=>{
        getData()
      },[])


      const delProduct = (product)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success',
        axios({
          method:'delete',
          url:`http://localhost:9000/products/${product.id}`
        }).then((result)=>{console.log(result);})
        
        )}getData()})

        
      
    }

    const delUser = (user)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
      axios({
        method:'delete',
        url:`http://localhost:9000/users/${user.id}`
      }).then((result)=>{console.log(result);})
      
      )}
      getUsersData()})

      
    
  }




    const viewProduct = ()=>{
      axios({
        method:'get',
        url:`http://localhost:9000/products`
      }).then((product)=>{
        console.log(product);
      })
    }
     
     
      const payBtn=()=>{

        if(signin==='Sign in'){
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not a member!'
          }).then((result)=>{
            if(result.isConfirmed){
              navigate('/signin')
            }
          })} else {
            navigate('/pay')
          }




      }
       
         
          
     
      
    
      
          const [passwordShown,setPasswordShown] = useState(false)
          const togglePassword = () => {
                                       
          setPasswordShown(!passwordShown);};

         
   
       
       {
        return (
        <div className='app'>
          <Naav checkError={checkError} checkLogn={checkLogn} getPanel1={getPanel1} getPanel={getPanel} controlPanel={controlPanel} newProducts1={l}  newProducts={f} signin={signin} FormSubmit4={FormSubmit4}/>
  
          <Routes>
          <Route path='/' element={<Home data1={products1} add1={add1}/>}   />
            <Route path='/Shop' element={<Shop data={products} add={add} />} />
            <Route path='/Cart' element={<Cart signin={signin} payBtn={payBtn} newProducts1={l}  newProducts={f} newPrice={price}   inc1={inc1} dec1={dec1} inc={inc} dec={dec} del1={del1} del={del} total={total}  />} />
            <Route path='/signin'  element={<Signin checkSignIn={checkSignIn}  signin={signin}  incorrect={incorrect} emailError={emailError} passwordError={passwordError} changeEmailAdress3={changeEmailAdress3} changePassword3={changePassword3} email={email} password={password} FormSubmit3={FormSubmit3}/>}/>
            <Route path='/signup'   element={<Signup age={Age} changeAge={changeAge} ageError={ageError} incorrect1={incorrect1} togglePassword={togglePassword} passwordShown={passwordShown} password={password} phoneNumber={phoneNumber} email={email} SecondName={SecondName} changePassword={changePassword} changeEmailAdress={changeEmailAdress} changePhone={changePhone} changeSecondName={changeSecondName} changeFirstName={changeFirstName} FormSubmit={FormSubmit} firstName={firstName} firstNameError={firstNameError} secondNameError={secondNameError} emailError={emailError} phoneNumberError={phoneNumberError} passwordError={passwordError} />}/>
            <Route path='/pay'  element={<Pay cardDate={cardDate} cardDateError={cardDateError} changeCardDate={changeCardDate} changeCardName={changeCardName} changeCardNumber={changeCardNumber} changeCvv={changeCvv} cardNumber={cardNumber} cardNumberError={cardNumberError} cardName={cardName} cardNameError={cardNameError} cvv={cvv} cvvError={cvvError} FormSubmit1={FormSubmit1}/>}/>
            <Route path='/products' element={<Products viewProduct={viewProduct} delProduct={delProduct} newProducts={newProducts} />}/>
            <Route path='/newproduct' element={<NewProduct FormSubmit5={FormSubmit5} changeProductName={changeProductName} changeProductPrice={changeProductPrice} changeProductItems={changeProductItems} changeProductImage={changeProductImage} productName={productName} productPrice={productPrice} productItems={productItems} productImage={productImage} />}/> 
            <Route path='/products/:ID' element={<ProductDetails />}   /> 
            <Route path='/users/:ID' element={<UserDetails  userName={userName} userMail={userMail} userPassword={userPassword} newName={newName} gender={gender} userAge={userAge} userRole={userRole}/>}/>
            <Route path='/users' element={<Users delUser={delUser} newUsers={newUsers} />}  /> 
            <Route path='/dashboard' element={<Dashboard  />}  /> 
            <Route path='/newusers' element={<NewUser userRoleError={userRoleError} userPhoneNumberError={userPhoneNumberError} userMailError={userMailError} userAgeError={userAgeError} userPasswordError={userPasswordError} userNameError={userNameError} newNameError={newNameError} admin={admin} user={user} changeUserPhoneNumber={changeUserPhoneNumber} userPhoneNumber={userPhoneNumber} FormSubmit7={FormSubmit7} changeNewName={changeNewName} changeGender={changeGender} changeUserName={changeUserName} changeUserMail={changeUserMail} changeUserPassword={changeUserPassword} changeUserAge={changeUserAge} changeUserRole={changeUserRole} userName={userName} userMail={userMail} userPassword={userPassword} newName={newName} gender={gender} userAge={userAge} userRole={userRole} />}  /> 
            <Route path='/controlPanel' element={<ControlPanel />}   /> 
            <Route path='/editproducts/:productt' element={<EditProduct />}   /> 
            <Route path='/editusers/:users' element={<EditUsers/>} />
          <Route path='/sidebar' element={<SideBar   />}/>
 

          </Routes>
          
        </div>
      )}
        
    
    }


export default App















// state = {
//   products1 : [
//   {id:0 , name:'Quilted Gilet with Hood',price:'$150.00',img:t1},
//   {id:1 , name:'Quilted Gilet with Hood',price:'$110.00',img:t2},
//   {id:2 , name:'Quilted Gilet with Hood',price:'$200.00',img:t3},
//   {id:3 , name:'Quilted Gilet with Hood',price:'$250.00',img:t4}],
//   products : [
//     {id:0 , name:'shirt',price:'$200.00',img:shopC2},
//   {id:1 , name:'shirt',price:'$210.00',img:shopC3},
//   {id:2 , name:'shirt',price:'$250.00',img:shopC4},
//   {id:3 , name:'shirt',price:'$220.00',img:shopC5},
//   {id:4 , name:'shirt',price:'$230.00',img:shopC6},
//   {id:5 , name:'shirt',price:'$200.00',img:t5},
//   {id:6 , name:'Hood',price:'$105.00',img:shopC1},
//   {id:7 , name:'Jeans',price:'$300.00',img:shopC7},
//   {id:8 , name:'Jeans',price:'$320.00',img:shopC8}],

//   x:{}

// 


// const add1 = (obj)=>{
//   setCart1([...cart1,obj])
  
//  }



// axios({
//   method:'post',
//   url:'http://localhost:9000/users',
//   data:{
//     firstName: firstName,
//     SecondName: SecondName,
//     EmailAddress: email,
//     phoneNumber: phoneNumber,
//     type: type,
//     password: password,
//   }

// })


// setIncorrect1('email is already exist')
//                   setFirstNameError('First Name');
//                   setSecondNameError('Second Name');
//                   setEmailError('Email Address');
//                   setPhoneNumberError('Phone Number');
//                   setPasswordError(' Password');
                  
//                   setEmail('');
//                   setPassword(''); 




// if(email===e.EmailAddress&&password===e.password){
                
//   navigate('/');
//   setEmail('')
//   setPassword('')
//   setSignIn('Sign out')
//   setControlPanel('Control Panel')

// }


  
// else {
//   setIncorrect('Email or Password is incorrect')
//   setControlPanel('')
// }




// axios({
//   method:'get',
//   url:`http://localhost:9000/users`,
// }).then((user)=>{
  
//     if(user.data[0].EmailAddress==email &&user.data[0].password==password&&password.length>=6){
//        navigate('/');
//         setEmail('')
//         setPassword('')
//         setSignIn('Sign out')
//         setControlPanel('Control Panel')

//     }else if(user.data[0].EmailAddress!==email &&user.data[0].password!==password&&password.length>=6){
//       navigate('/');
//       setEmail('')
//       setPassword('')
//       setSignIn('Sign out')
//        setControlPanel('')
//     }else if(getMail.indexOf(email)==-1){
//       setIncorrect('Email or Password is incorrect')
//     } else if(  user.data.map((e)=>{
//       if(email!==e.EmailAddress&&password!==e.password){
        
//         setIncorrect('Email or Password is incorrect')
      
//       }
//     })){ setIncorrect('Email or Password is incorrect')}
  
  


//     user.data.map((e)=>{
      
//         if(e.EmailAddress!==email){
//           console.log(e.id);
//           if(e.password!==password){
//             setIncorrect('Email or Password is incorrect')
            
//           }
//         };
      
//     })

// })



        
        
// const showName =()=>{
       
//   if(checkSignIn===true)
//   { axios({
//     method: "get",
//     url: `http://localhost:9000/users`,
//   }).then((data) => {
//     setCheckLogn(data.data);
    
//   });}
    
     
//     }
    
//     useEffect(()=>{
     
//       showName()
//     },[checkSignIn])


    
//     const checkLogin = () => {
//       setCheckSignIn(true);
//     };


// const FormSubmit3=(e)=>{
//   e.preventDefault();
//   showName()
//   checkLogin()
//   axios({
//     method:'get',
//     url:`http://localhost:9000/users`,
//   }).then((user)=>{
//     user.data.map((e)=>{
      
//       if(e.EmailAddress==email){
//         if(e.password==password){
          
//            navigate('/',{state:{id:e.id}})
           
//             setEmail('')
//             setPassword('')
//             setSignIn('Sign out')
           
//             setCheckError(e.type)
            
           
        
//         }
//       }else if(getMail.indexOf(email)!==-1){
//         setIncorrect('Email or Password is incorrect')
//       }else {
//         setIncorrect('Email or Password is incorrect')
//       }
//     })})
  


  
  
  
  
  
//   }
      


// const FormSubmit4 = ()=>{

//   if(signin=='Sign out'){
//     setSignIn('Sign in');
//     setCheckLogn({ id: 0 });
//     setCheckSignIn(false);
//     setEmail('');
//     setPassword('')
//     setIncorrect('')
    
    
//   }else if(signin=='Sign in'){
//     setControlPanel('')
//   }
// }




