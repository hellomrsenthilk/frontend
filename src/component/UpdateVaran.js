import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Raasi from "./subcomponent/Raasi";
import axios from 'axios';


const UpdateVaran = () => {

   const [isUpdate, setIsUpdating] = useState(false);
   const { state } = useLocation();
   const navigate = useNavigate();
      
    const [txtHoro1, setTxtHoro1] = useState("");
    const [txtHoro2, setTxtHoro2] = useState("");
    const [txtHoro3, setTxtHoro3] = useState("");
    const [txtHoro4, setTxtHoro4] = useState("");
    const [txtHoro5, setTxtHoro5] = useState("");
    const [txtHoro6, setTxtHoro6] = useState("");
    const [txtHoro7, setTxtHoro7] = useState("");
    const [txtHoro8, setTxtHoro8] = useState("");
    const [txtHoro9, setTxtHoro9] = useState("");
    const [txtHoro10, setTxtHoro10] = useState("");
    const [txtHoro11, setTxtHoro11] = useState("");
    const [txtHoro12, setTxtHoro12] = useState("");

    function handleHoroscope1Change(e) {
        setTxtHoro1(e.target.value);
    }
    function handleHoroscope2Change(e) {
        setTxtHoro2(e.target.value);
    }
    function handleHoroscope3Change(e) {
        setTxtHoro3(e.target.value);
    }
    function handleHoroscope4Change(e) {
        setTxtHoro4(e.target.value);
    }
    function handleHoroscope5Change(e) {
        setTxtHoro5(e.target.value);
    }
    function handleHoroscope6Change(e) {
        setTxtHoro6(e.target.value);
    }
    function handleHoroscope7Change(e) {
        setTxtHoro7(e.target.value);
    }
    function handleHoroscope8Change(e) {
        setTxtHoro8(e.target.value);
    }
    function handleHoroscope9Change(e) {
        setTxtHoro9(e.target.value);
    }
    function handleHoroscope10Change(e) {
        setTxtHoro10(e.target.value);
    }
    function handleHoroscope11Change(e) {
        setTxtHoro11(e.target.value);
    }
    function handleHoroscope12Change(e) {
        setTxtHoro12(e.target.value);
    }

    const [formVaran, setFormVaran] = useState({
        txtName: "",
        sex: "",
        dob: "",
        ddTimeOfBirth: "",
        ddMinOfBirth: "",
        ddSecOfBirh: "",
        txtplaceofbirth: "",
        txtnativity: "",
        ddlmothertongue: "",
        maritialStatus: "",
        txtfathername: "",
        fatherAlive: "",
        txtfatherjob: "",
        txtmothername: "",
        motherAlive: "",
        txtmotherjob: "",
        ddlmelderbrother: "",
        ddlmyoungerbrother: "",
        ddlmeldersister: "",
        ddlmyoungersister: "",
        ddlunelderbrother: "",
        ddlunyoungerbrother: "",
        ddluneldersister: "",
        ddlunyoungersister: "",
        txtotherdetails: "",
        ddlheight: "",
        ddlweight: "",
        ddlbloodgroup: "",
        diet: "",
        complexion: "", 
        physicalStatus: "",
        txtqualification: "",
        txtjob: "",
        txtplaceofjob: "",
        txtincome: "",
        ddlcaste: "",
        ddlsubcaste: "",
        txtgothram: "",
        ddlStar: "",
        ddlRaasiSign: "",
        ddlLaknamNo: "",
        ddlLaknam: "",
        txtpermanentaddress: "",
        txtpresentaddress: "",
        txtcontactperson: "",
        txtMobileNo: "",
        txtEmail: "",
        txtlandline2: "",
        txtDasa: "",
        txtYears: "",
        txtMonths: "",
        txtDays: "",
        txtHoro1: "",
        txtHoro2: "",
        txtHoro3: "",
        txtHoro4: "",
        txtHoro5: "",
        txtHoro6: "",
        txtHoro7: "",
        txtHoro8: "",
        txtHoro9: "",
        txtHoro10: "",
        txtHoro11: "",
        txtHoro12: "",
        txtAmsam1: "",
        txtAmsam2: "",
        txtAmsam3: "",
        txtAmsam4: "",
        txtAmsam5: "",
        txtAmsam6: "",
        txtAmsam7: "",
        txtAmsam8: "",
        txtAmsam9: "",
        txtAmsam10: "",
        txtAmsam11: "",
        txtAmsam12: "",
        txtpqualification: "",
        txtplaceofjob1: "",
        txtincome1: "",
        ddlPreferredAgeFrom: "",
        ddlPreferredAgeTo: "",
        ecaste: "",
        esubcaste: "",
        othercomments: "",
        FileUpload3: "",
        FileUpload2: "",
        ddlscheme: ""
    });

    function handleSubmit(event)  {
        event.preventDefault();
        axios.post('http://localhost:8089/registerVaran/save', formVaran)
        .then( res => { 
            console.log("post");
            console.log(res);
            navigate("/");
         })
        .catch(err => console.log(err));
    }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, [name]: value });
      };


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h4 className="m-0">REGISTER VARAN - <b>மணமகள், மணமகன் விபரம் சேகரிப்பு</b></h4>
                        </div>
                        <div className="card-body">
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color: 'white'}}>Personal and Family Details</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row row-gap-2"> 
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                 <b>Name</b>
                                </label>
                                <input
                                type="text"
                                placeholder="வரன் பெயர்"
                                className="form-input"
                                name="txtname"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                 <b>Sex</b>
                                </label><br/>
                                <select name="sex" id="maritialStatus" class="dd_NoWidth" 
                                     className="font-size-13"  onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                <b>Date of Birth</b>
                                </label>
                                <input
                                type="text"
                                placeholder="பிறந்த தேதி"
                                className="form-input"
                                name="dob"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-15">
                                <b>Time of Birth - பிறந்த நேரம்</b>
                                </label> <br/>
                                <select name="ddTimeOfBirth" id="ddTimeOfBirth" class="dd_NoWidth"
                                   onChange={handleChange}>
                                <option value="Hr" selected>HR</option>
                                <option value="0">00</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                        <select name="ddMinOfBirth" id="ddMinOfBirth" class="dd_NoWidth"
                             onChange={handleChange}>
                            <option value="MIN" selected>MIN</option>
                            <option value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                    </select>
                        &nbsp;&nbsp;
                        <select name="ddSecOfBirh" id="ddSecOfBirh" class="dd_NoWidth"
                            value={formVaran?.ddSecOfBirh} onChange={handleChange}>
                        <option value="0" selected>AM</option>
                        <option value="1">PM</option>
                    </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-15">
                                <b>Place Of Birth</b>
                                </label>
                                <input
                                type="text"
                                placeholder="பிறந்த இடம்"
                                className="form-input"
                                name="txtplaceofbirth"
                                value={formVaran?.txtplaceofbirth} onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                <b>Nativity</b>
                                </label>
                                <input
                                type="text"
                                placeholder="Nativity"
                                className="form-input"
                                name="txtnativity"
                                value={formVaran?.txtnativity} onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                <b>Mother Tongue</b>
                                </label>
                                <input
                                type="text"
                                placeholder="தாய் மொழி"
                                className="form-input"
                                name="motherTongue"
                                value={formVaran?.motherTongue} onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Marital status </b><br/>
                                <select name="maritialStatus" id="maritialStatus" class="dd_NoWidth" 
                                    value={formVaran?.maritialStatus} onChange={handleChange}>
                                    <option value="Unmarried">Unmarried</option>
                                    <option value="Married">Married</option>
                                    <option value="Widow">Widow</option>
                                    <option value="Widower">Widower</option>
                                    <option value="Divorce">Divorce</option>
                                </select>
                            </div>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color: 'white'}}>Parents - Father Details </h4>
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-15">
                                <b>Father's Name</b>
                                </label>
                                <input
                                type="text"
                                placeholder="தந்தை பெயர்"
                                className="form-input"
                                name="fatherName"
                                value={formVaran?.fatherName} onChange={handleChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Father's Alive</b> <br/>
                                <select name="fatherAlive" id="fatherAlive" class="dd_NoWidth" 
                                value={formVaran?.fatherAlive} onChange={handleChange}>
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-15">
                                <b>Father's Job</b>
                                </label>
                                <input
                                type="text"
                                placeholder="தந்தை தொழில்"
                                className="form-input"
                                name="fatherJob"
                                value={formVaran?.fatherJob} onChange={handleChange}
                                />
                            </div><br/>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color: 'white'}}>Parents - Mother Details </h4>
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-15">
                                <b>Mother's Name</b>
                                </label>
                                <input
                                type="text"
                                placeholder="தாயார் பெயர்"
                                className="form-input"
                                name="motherName"
                                value={formVaran?.motherName} onChange={handleChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Mother's Alive</b> <br/>
                                <select name="maritialStatus" id="maritialStatus" class="dd_NoWidth"
                                    value={formVaran?.motherAlive} onChange={handleChange} >
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-15">
                                <b>Mother's Job</b>
                                </label>
                                <input
                                type="text"
                                placeholder="தொழில்"
                                className="form-input"
                                name="motherJob"
                                value={formVaran?.motherJob} onChange={handleChange}
                                />
                            </div><br/>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color: 'white'}}>Brother and Sister Married Unmarried Details</h4>
                            </div>
                           <div>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td  class="Label">
                                    <b>Relationship</b>
                                </td>
                                <td  class="Label">
                                    <b>Elder Brother</b>
                                </td>
                                <td class="Label">
                                    <b>Younger brother</b>
                                </td>
                                <td class="Label">
                                    <b>Elder Sister</b>
                                </td>
                                <td class="Label">
                                    <b>Younger Sister</b>
                                </td>
                                <td>&nbsp;
                                    
                                </td>
                            </tr>
                            <tr >
                                <td class="Label">
                                    <b>Married</b>
                                </td>
                                <td>
                                    <select name="ddlmelderbrother" id="ddlmelderbrother" class="dd_NoWidth_WhiteBorder" 
                                        value={formVaran?.ddlmelderbrother} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlmyoungerbrother" id="ddlmyoungerbrother" class="dd_NoWidth_WhiteBorder" 
                                        value={formVaran?.ddlmyoungerbrother} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                 </select>
                                </td>
                                <td>
                                    <select name="ddlmeldersister" id="ddlmeldersister" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran?.ddlmeldersister} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlmyoungersister" id="ddlmyoungersister" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran?.ddlmyoungersister} onChange={handleChange} >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5 and above">5 and above</option>
                                    </select>
                                </td>
                                <td>&nbsp;
                                    
                                </td>
                            </tr>
                            <tr>
                                <td class="Label">
                                    <b>UnMarried</b>
                                </td>
                                <td >
                                    <select name="ddlunelderbrother" id="ddlunelderbrother" class="dd_NoWidth_WhiteBorder" 
                                        value={formVaran?.ddlunelderbrother} onChange={handleChange}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5 and above">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlunyoungerbrother" id="ddlunyoungerbrother" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran?.ddlunyoungerbrother} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddluneldersister" id="ddluneldersister" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran?.ddluneldersister} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlunyoungersister" id="ddlunyoungersister" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran?.ddlunyoungersister} onChange={handleChange}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5 and above">5 and above</option>
                                    </select>
                                </td>
                                </tr>
                               </table> 
                            </div>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color: 'white'}}>Any Other Details</h4>
                            </div>
                            <div>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left" class="Label" valign="middle">
                                        <b>Any Others Details</b><br />
                                        <b>(Talents, Acheivements, Likes, Visa Status, Family details, God etc)</b>
                                    </td>
                                    <td style={{width: "1px"}} align="right" class="Label">
                                     &nbsp;&nbsp;
                                    </td>
                                    <td align="left" valign="middle">
                                        <textarea name="txtotherdetails" rows="2" cols="10" id="txtotherdetails" 
                                        class="textbox" style={{height:"80px", width: "665px" }}
                                        value={formVaran?.txtotherdetails} onChange={handleChange}></textarea>
                                    </td>
                                </tr>
                            </table>
                            </div>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color : "white"}}>Physical Attributes</h4>
                            </div>
                            <div>
                            <table>
                            <tr><td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="left" class="Label">
                                    <b>Height </b> : &nbsp;
                                </td>
                                <td align="left">
                                <select name="ddlheight" id="ddlheight" class="dd_NoWidth" style={{width: "150px"}}
                                    value={formVaran?.ddlheight} onChange={handleChange}>
                                <option value="1">-ft-</option>
                                <option value="2">4ft - 121 cm</option>
                                <option value="3">4ft 1in - 124cm</option>
                                <option value="4">4ft 2in - 127cm</option>
                                <option value="5">4ft 3in - 129cm</option>
                                <option value="6">4ft 4in - 132cm</option>
                                <option value="7">4ft 5in - 134cm</option>
                                <option value="8">4ft 6in - 137cm</option>
                                <option value="9">4ft 7in - 139cm</option>
                                <option value="10">4ft 8in - 142cm</option>
                                <option value="11">4ft 9in - 144cm</option>
                                <option value="12">4ft 10in - 147cm</option>
                                <option value="13">4ft 11in - 149cm</option>
                                <option value="14">5ft - 152cm</option>
                                <option value="15">5ft 1in - 154cm</option>
                                <option value="16">5ft 2in - 157cm</option>
                                <option value="17">5ft 3in - 160cm</option>
                                <option value="18">5ft 4in - 162cm</option>
                                <option value="19">5ft 5in - 165cm</option>
                                <option value="20">5ft 6in - 167cm</option>
                                <option value="21">5ft 7in - 170cm</option>
                                <option value="22">5ft 8in - 172cm</option>
                                <option value="23">5ft 9in - 175cm</option>
                                <option value="24">5ft 10in - 177cm</option>
                                <option value="25">5ft 11in - 180cm</option>
                                <option value="26">6ft - 182cm</option>
                                <option value="27">6ft 1in - 185cm</option>
                                <option value="28">6ft 2in - 187cm</option>
                                <option value="29">6ft 3in - 190cm</option>
                                <option value="30">6ft 4in - 193cm</option>
                                <option value="31">6ft 5in - 195cm</option>
                                <option value="32">6ft 6in - 198cm</option>
                                <option value="33">6ft 7in - 200cm</option>
                                <option value="34">6ft 8in - 203cm</option>
                                <option value="35">6ft 9in - 205cm</option>
                                <option value="36">6ft 10in - 208cm</option>
                                <option value="37">6ft 11in - 210cm</option>
                                <option value="38">7ft - 213cm</option>

                                </select>
                                </td>
                            </tr>
                            </table></td>
                                <td>&nbsp;</td>
                            <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="right" class="Label">
                                    <b> Weight </b>: &nbsp;&nbsp;
                                </td>
                                <td align="left">
                                <select name="ddlweight" id="ddlweight" class="dd_NoWidth"
                                    value={formVaran?.ddlweight} onChange={handleChange}>
                                <option value="0">- Kgs -</option>
                                <option value="41">41 kg</option>
                                <option value="42">42 kg</option>
                                <option value="43">43 kg</option>
                                <option value="44">44 kg</option>
                                <option value="45">45 kg</option>
                                <option value="46">46 kg</option>
                                <option value="47">47 kg</option>
                                <option value="48">48 kg</option>
                                <option value="49">49 kg</option>
                                <option value="50">50 kg</option>
                                <option value="51">51 kg</option>
                                <option value="52">52 kg</option>
                                <option value="53">53 kg</option>
                                <option value="54">54 kg</option>
                                <option value="55">55 kg</option>
                                <option value="56">56 kg</option>
                                <option value="57">57 kg</option>
                                <option value="58">58 kg</option>
                                <option value="59">59 kg</option>
                                <option value="60">60 kg</option>
                                <option value="61">61 kg</option>
                                <option value="62">62 kg</option>
                                <option value="63">63 kg</option>
                                <option value="64">64 kg</option>
                                <option value="65">65 kg</option>
                                <option value="66">66 kg</option>
                                <option value="67">67 kg</option>
                                <option value="68">68 kg</option>
                                <option value="69">69 kg</option>
                                <option value="70">70 kg</option>
                                <option value="71">71 kg</option>
                                <option value="72">72 kg</option>
                                <option value="73">73 kg</option>
                                <option value="74">74 kg</option>
                                <option value="75">75 kg</option>
                                <option value="76">76 kg</option>
                                <option value="77">77 kg</option>
                                <option value="78">78 kg</option>
                                <option value="79">79 kg</option>
                                <option value="80">80 kg</option>
                                <option value="81">81 kg</option>
                                <option value="82">82 kg</option>
                                <option value="83">83 kg</option>
                                <option value="84">84 kg</option>
                                <option value="85">85 kg</option>
                                <option value="86">86 kg</option>
                                <option value="87">87 kg</option>
                                <option value="88">88 kg</option>
                                <option value="89">89 kg</option>
                                <option value="90">90 kg</option>
                                <option value="91">91 kg</option>
                                <option value="92">92 kg</option>
                                <option value="93">93 kg</option>
                                <option value="94">94 kg</option>
                                <option value="95">95 kg</option>
                                <option value="96">96 kg</option>
                                <option value="97">97 kg</option>
                                <option value="98">98 kg</option>
                                <option value="99">99 kg</option>
                                <option value="100">100 kg</option>
                                <option value="101">101 kg</option>
                                <option value="102">102 kg</option>
                                <option value="103">103 kg</option>
                                <option value="104">104 kg</option>
                                <option value="105">105 kg</option>
                                <option value="106">106 kg</option>
                                <option value="107">107 kg</option>
                                <option value="108">108 kg</option>
                                <option value="109">109 kg</option>
                                <option value="110">110 kg</option>
                                <option value="111">111 kg</option>
                                <option value="112">112 kg</option>
                                <option value="113">113 kg</option>
                                <option value="114">114 kg</option>
                                <option value="115">115 kg</option>
                                <option value="116">116 kg</option>
                                <option value="117">117 kg</option>
                                <option value="118">118 kg</option>
                                <option value="119">119 kg</option>
                                <option value="120">120 kg</option>
                                <option value="121">121 kg</option>
                                <option value="122">122 kg</option>
                                <option value="123">123 kg</option>
                                <option value="124">124 kg</option>
                                <option value="125">125 kg</option>
                                <option value="126">126 kg</option>
                                <option value="127">127 kg</option>
                                <option value="128">128 kg</option>
                                <option value="129">129 kg</option>
                                <option value="130">130 kg</option>
                                <option value="131">131 kg</option>
                                <option value="132">132 kg</option>
                                <option value="133">133 kg</option>
                                <option value="134">134 kg</option>
                                <option value="135">135 kg</option>
                                <option value="136">136 kg</option>
                                <option value="137">137 kg</option>
                                <option value="138">138 kg</option> 
                                <option value="139">139 kg</option>
                                <option value="140">140 kg</option>
                                </select>
                                </td>
                            </tr>
                            </table></td>
                            <td>&nbsp;&nbsp;</td><td>&nbsp;</td>
                            <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                <td align="right" class="Label">
                                    <b>Blood Group</b> : &nbsp;
                                </td>
                                <td  align="left">
                                <select name="ddlbloodgroup" id="ddlbloodgroup" class="dd_NoWidth"
                                    value={formVaran?.ddlbloodgroup} onChange={handleChange}>
                                <option value="1">-Select-</option>
                                <option value="2">O+</option>
                                <option value="3">A+</option>
                                <option value="4">B+</option>
                                <option value="5">AB+</option>
                                <option value="6">O-</option>
                                <option value="7">A-</option>
                                <option value="8">B-</option>
                                <option value="9">AB-</option>

                                </select>
                                </td>
                                </tr>
                                </table>
                                </td>
                                <td>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;</td>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr >
                                        <td  align="left">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td  align="right" class="Label">
                                                        <b>Diet </b>: &nbsp;&nbsp;
                                                    </td>
                                                    <td align="left">
                                                        <select name="diet" value={formVaran?.diet} onChange={handleChange}>
                                                            <option value="Vegetarian">Vegetarian</option>
                                                            <option value="NonVeg">Non-Vegetarian</option>
                                                            <option value="Eggetarian">Eggetarian</option>
                                                        </select>    
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;</td>
                                        <td align="left">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td align="right" class="Label">
                                                        <b>Disability</b> : &nbsp;
                                                    </td>
                                                    <td align="left">
                                                        <div id="up_physical">
                                                            <select name="physicalStatus" value={formVaran?.physicalStatus} onChange={handleChange}>
                                                                <option value="Normal" checked="checked" >No</option>
                                                                <option  value="PhysicallyChallenged" >Yes</option>                                                                             
                                                            </select>    
                                                            </div>  
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>&nbsp;&nbsp;</td><td>&nbsp;&nbsp;</td>
                                        <td>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td align="right" class="Label">
                                                <b>Complexion</b> : &nbsp;
                                            </td>
                                            <td align="left">
                                                <select name="complexion" value={formVaran?.complexion} onChange={handleChange}>
                                                    <option value="VeryFair" >Very Fair</option>
                                                    <option value="Fair" >Fair</option>
                                                    <option value="Wheatish" >Wheatish</option>
                                                    <option value="Wheatishbrown" >Wheatish brown</option>
                                                    <option value="Dark" >Dark</option>
                                                </select>    
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </table>
                            </div>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color : "white"}}>Education & Occupation Details</h4>
                            </div>
                            <div>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="left">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td align="right" class="Label">
                                                <b>Qualification </b>: &nbsp;&nbsp;
                                            </td>
                                            <td align="left">
                                                <input name="txtqualification" type="text" id="txtqualification" class="TextBox"
                                                    value={formVaran?.txtqualification} onChange={handleChange}/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td align="left">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td align="right" class="Label">
                                                <b>Job</b> : &nbsp;&nbsp;
                                            </td>
                                            <td align="left">
                                                <input name="txtjob" type="text" id="txtjob" class="TextBox" 
                                                    value={formVaran?.txtjob} onChange={handleChange}/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td align="left">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td align="right" class="Label">
                                              <b>Place Of Job</b> : &nbsp;&nbsp;
                                            </td>
                                            <td align="left">
                                                <input name="txtplaceofjob" type="text" id="txtplaceofjob" class="TextBox"
                                                    value={formVaran?.txtplaceofjob} onChange={handleChange}/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td align="right" class="Label">
                                              <b>Income Per Month </b>: &nbsp;&nbsp;
                                            </td>
                                            <td align="left">
                                                <input name="txtincome" type="text" id="txtincome" class="TextBox" 
                                                    value={formVaran?.txtincome} onChange={handleChange}/>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                        </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}><h4 style={{color : "white"}}>
                            Astrology Details </h4></div>
                        <div>
                            <table>
                                <tr>
                                    <td> <b>Caste </b>: &nbsp; &nbsp; </td>
                                    <td> 
                                        <select name="ddlcaste"  id="ddlcaste" class="dd_NoWidth" 
                                            value={formVaran?.ddlcaste} onChange={handleChange} >
                                        <option selected="selected" value="0">Select</option>
                                        <option value="Nayudu">Nayudu</option>
                                        <option value="Others">Others</option>
                                        </select>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td><b>Sub Caste</b> : &nbsp; &nbsp; </td>
                                    <td>
                                        <input type="text" name="ddlsubcaste" id="ddlsubcaste" class="dd_NoWidth" 
                                        value={formVaran?.ddlsubcaste} onChange={handleChange}/>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td align="right" class="Label">
                                        <b>Gothram </b>: &nbsp;&nbsp;
                                    </td>
                                    <td >
                                        <input name="txtgothram" type="text" id="txtgothram" class="TextBox" 
                                            value={formVaran?.txtgothram} onChange={handleChange}/>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>
                                        <b>Star</b> : &nbsp;&nbsp;
                                    </td>
                                    <td>
                                    <select name="ddlStar" id="ddlStar" class="dd_NoWidth"
                                        value={formVaran?.ddlstar} onChange={handleChange}>
                                        <option value="1">-- Select Star --</option>
                                        <option value="2">ANUSHAM</option>
                                        <option value="3">ASTHAM</option>
                                        <option value="4">ASWINI</option>
                                        <option value="5">AVITTAM</option>
                                        <option value="6">AYILYAM</option>
                                        <option value="7">BARANI</option>
                                        <option value="8">CHITRAI</option>
                                        <option value="9">HASTHAM</option>
                                        <option value="10">KETTAI</option>
                                        <option value="11">KRITHIGAI</option>
                                        <option value="12">MAGAM</option>
                                        <option value="13">MIRUGASIRISHAM</option>
                                        <option value="14">MOOLAM</option>
                                        <option value="15">POORADAM</option>
                                        <option value="16">POORAM</option>
                                        <option value="17">POOSAM</option>
                                        <option value="18">PUNARPOOSAM</option>
                                        <option value="19">POORATTATHI</option>
                                        <option value="20">REVATHI</option>
                                        <option value="21">ROHINI</option>
                                        <option value="22">SADAYAM</option>
                                        <option value="23">SWATHI</option>
                                        <option value="24">THIRUVADIRAI</option>
                                        <option value="25">THIRUVONAM</option>
                                        <option value="26">UTHIRADAM</option>
                                        <option value="27">UTHIRAM</option>
                                        <option value="28">UTTHIRATTATHI</option>
                                        <option value="29">VISAGAM</option>
                                        </select>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>
                                        <b>Raasi/Moon Sign </b>: &nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <select name="ddlRaasiSign" id="ddlRaasiSign" class="dd_NoWidth"
                                            value={formVaran?.ddlRaasiSign} onChange={handleChange}>
                                            <option value="0">-- Select Rasi --</option>
                                            <option value="1">MESHAM</option>
                                            <option value="2">RISHABAM</option>
                                            <option value="3">MITHUNAM</option>
                                            <option value="4">KATAKAM</option>
                                            <option value="5">SIMMAM</option>
                                            <option value="6">KANNI</option>
                                            <option value="7">VRICHIKA</option>
                                            <option value="8">THULAM</option>
                                            <option value="9">MAGARAM</option>
                                            <option value="10">KUMBHAM</option>
                                            <option value="11">MEENAM</option>
                                            <option value="12">DHANUSU</option>
                                        </select>
                                    </td>
                                </tr>
                        </table>
                        <table>
                                <tr><td>&nbsp;&nbsp;</td></tr>
                                <tr>
                                    <td align="left" colSpan={3}>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="right" class="Label">
                                                    <b>Padam</b> : &nbsp;&nbsp;
                                                </td>
                                                <td align="left" class="Label">
                                                    <select name="ddlLaknamNo" id="ddlLaknamNO" class="dd_NoWidth"
                                                        value={formVaran?.ddlLaknamNo} onChange={handleChange}>
                                                        <option value="0">-Select Padam--</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>                                                                        </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td colSpan={3}>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                            <td align="left">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="right" class="Label">
                                                    <b>Laknam </b>: &nbsp;&nbsp;
                                                </td>
                                                <td align="left">
                                                    <select name="ddlLaknam" id="ddlLaknam" class="dd_NoWidth"
                                                        value={formVaran?.ddlLaknam} onChange={handleChange}>
                                                    <option value="0">-Select Laknam--</option>
                                                    <option value="1">MESHAM</option>
                                                    <option value="2">RISHABAM</option>
                                                    <option value="3">MITHUNAM</option>
                                                    <option value="4">KATAKAM</option>
                                                    <option value="5">SIMMAM</option>
                                                    <option value="6">KANNI</option>
                                                    <option value="7">VRICHIKA</option>
                                                    <option value="8">THULAM</option>
                                                    <option value="9">MAGARAM</option>
                                                    <option value="10">KUMBHAM</option>
                                                    <option value="11">MEENAM</option>
                                                    <option value="12">DHANUSU</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            </table>
                                            </td>
                                            </tr>
                                            </table>
                                        </td>
                                </tr>
                            </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>
                                 Communication Details
                            </h4>
                        </div>
                        <div>
                        <table>
                        <tr>
                        <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>Permenant Address </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    <textarea name="txtpermanentaddress" rows="4" cols="60" id="txtpermanentaddress"
                                                     class="TextBox" value={formVaran?.txtpermanentaddress} onChange={handleChange}
                                                        ></textarea>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>    Present Address </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <textarea name="txtpresentaddress" rows="4" cols="60" id="txtpresentaddress" 
                                                        class="TextBox" value={formVaran?.txtpresentaddress} onChange={handleChange}></textarea>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>Contact Person </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <input name="txtcontactperson" type="text" id="txtcontactperson" 
                                                         value={formVaran?.txtcontactperson} onChange={handleChange} class="TextBox" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>Contact Number </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                <input name="txtMobileNo" type="text" id="txtMobileNo" 
                                                    value={formVaran?.txtMobileNo} onChange={handleChange} class="TextBox"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                </tr>
                            </table>
                        </td>
                        </tr>
                        </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>
                                 Horoscope Details
                            </h4>
                        </div>
                        <div>
                        <table border="0" cellpadding="5" cellspacing="0" width="100%">
                        <tr>
                            <td align="center">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="100%" height="28">
                                                        <table border="0" width="100%" cellpadding="0">
                                                            <tr>
                                                                <td align="center" class="Label">
                                                                    <b>Balance </b>: &nbsp;&nbsp;
                                                                    <input name="txtDasa" type="text" id="txtDasa" 
                                                                         value={formVaran?.txtDasa} onChange={handleChange}  class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Dasa</b> &nbsp;&nbsp;<input name="txtYears" type="text" id="txtYears" 
                                                                          value={formVaran?.txtYears} onChange={handleChange} class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Year(s) </b>&nbsp;&nbsp;<input name="txtMonths" type="text" id="txtMonths" 
                                                                         value={formVaran?.txtMonths} onChange={handleChange}  class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Month(s)</b> &nbsp;&nbsp;<input name="txtDays" type="text" id="txtDays" 
                                                                         value={formVaran?.txtDays} onChange={handleChange} class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Day(s)</b>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="0" cellspacing="0" width="90%">
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                            <td >
                                                                    <table border="3" cellpadding="0" cellspacing="0" width="60px">
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px">
                                                                                            <select name="ddlHoro1" id="ddlHoro1" class="TextBox_WhiteBorder" 
                                                                                                 onChange={handleHoroscope1Change}><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro2" id="ddlHoro2" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope2Change} ><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro3" id="ddlHoro3" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope3Change}><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro4" id="ddlHoro4" class="TextBox_WhiteBorder"
                                                                                                onChange={handleHoroscope4Change} ><Raasi/></select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <select name="ddlHoro5" id="ddlHoro5" class="TextBox_WhiteBorder"
                                                                                                        onChange={handleHoroscope5Change} ><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px">
                                                                                                        <select name="ddlHoro6" id="ddlHoro6" class="TextBox_WhiteBorder"
                                                                                                            onChange={handleHoroscope6Change}><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p align="center">
                                                                                                <b><font face="Arial" size="3" color="#008000"><br/>RASI<br/></font></b>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <select name="ddlHoro7" id="ddlHoro7" class="TextBox_WhiteBorder" 
                                                                                                            onChange={handleHoroscope7Change}><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <select name="ddlHoro8" id="ddlHoro8" class="TextBox_WhiteBorder"
                                                                                                            onChange={handleHoroscope8Change} ><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro9" id="ddlHoro9" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope9Change}><Raasi/></select>
                                                                                            
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro10" id="ddlHoro10" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope10Change} ><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro11" id="ddlHoro11" class="TextBox_WhiteBorder"
                                                                                                onChange={handleHoroscope11Change} ><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro12" id="ddlHoro12" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope12Change}><Raasi/></select>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td>&nbsp;&nbsp;
                                                                </td>
                                                                <td >
                                                                    <table border="3" cellpadding="0" cellspacing="0" width="60px">
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px">
                                                                                            <textarea name="txtHoro1" rows="2" cols="10" id="txtHoro1" 
                                                                                            value={txtHoro1} class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro2" 
                                                                                                value={txtHoro2} rows="2" cols="10" id="txtHoro2" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro3" 
                                                                                                value={txtHoro3} rows="2" cols="10" id="txtHoro3" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro4" 
                                                                                                value={txtHoro4} rows="2" cols="10" id="txtHoro4" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtHoro5" 
                                                                                                            value={txtHoro5} rows="2" cols="10" id="txtHoro5" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px">
                                                                                                        <textarea name="txtHoro6" 
                                                                                                            value={txtHoro6} rows="2" cols="10" id="txtHoro6" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p align="center">
                                                                                                <b><font face="Arial" size="3" color="#008000">RASI</font></b>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtHoro7" 
                                                                                                            value={txtHoro7} rows="2" cols="10" id="txtHoro7" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtHoro8" 
                                                                                                            value={txtHoro8} rows="2" cols="10" id="txtHoro8" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro9" 
                                                                                            value={txtHoro9} rows="2" cols="10" id="txtHoro9" class="TextBox_WhiteBorder" ></textarea>
                                                                                            
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro10" 
                                                                                            value={txtHoro10} rows="2" cols="10" id="txtHoro10" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro11" 
                                                                                               value={txtHoro11} rows="2" cols="10" id="txtHoro11" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro12"
                                                                                                value={txtHoro12} rows="2" cols="10" id="txtHoro12" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td>&nbsp;&nbsp;
                                                                </td>
                                                                <td>
                                                                    <table border="3" cellpadding="0" cellspacing="0" width="60%">
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="70%">
                                                                                    <tr>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam1" rows="2" cols="10" id="txtAmsam1" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <textarea name="txtAmsam2" rows="2" cols="10" id="txtAmsam2" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam3" rows="2" cols="10" id="txtAmsam3" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam4" rows="2" cols="10" id="txtAmsam4" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam5" rows="2" cols="10" id="txtAmsam5" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam6" rows="2" cols="10" id="txtAmsam6" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p align="center">
                                                                                                <b><font face="Arial" size="3" color="#008000">AMSAM</font></b>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam7" rows="2" cols="10" id="txtAmsam7" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam8" rows="2" cols="10" id="txtAmsam8" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tr>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam9" rows="2" cols="10" id="txtAmsam9" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam10" rows="2" cols="10" id="txtAmsam10" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam11" rows="2" cols="10" id="txtAmsam11" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam12" rows="2" cols="10" id="txtAmsam12" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>&nbsp;
                                                                    
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>
                                Partner Expectation Details (வாழ்க்கை துணை பற்றிய எதிர்பார்ப்பு)
                            </h4>
                        </div>
                        <div>
                        <table>
                        <tr>
                            <td>
                                <b>Qualification</b> :
                            </td>
                            <td>
                                <input name="txtpqualification" type="text" id="txtpqualification" class="TextBox" />
                            </td>
                            <td align="right" class="Label">
                                <b>Job</b> :
                            </td>
                            <td align="left">
                                <input name="txtplaceofjob1" type="text" id="txtplaceofjob1" class="TextBox" />
                            </td>
                            <td align="right" class="Label">
                                <b>Job </b>:
                            </td>
                            <td align="left">
                                <select>  
                                    <option value="Must">Must</option>
                                    <option value="Optional">Optional</option>
                                    <option value="Required">Not required</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Income Per Month </b>:
                            </td>
                            <td >
                                <input name="txtincome1" type="text" id="txtincome1" class="TextBox" />
                            </td>
                            <td  align="right">
                                <b>Preferred Age </b>:
                            </td>
                            <td align="left" class="Label">
                                <select name="ddlPreferredAgeFrom" id="ddlPreferredAgeFrom" class="dd_NoWidth">
                                    <option value="0">Select</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                    <option value="50">50</option>
                                    <option value="51">51</option>
                                    <option value="52">52</option>
                                    <option value="53">53</option>
                                    <option value="54">54</option>
                                    <option value="55">55</option>
                                </select>
                                    To
                                <select name="ddlPreferredAgeTo" id="ddlPreferredAgeTo" class="dd_NoWidth">
                                        <option value="0">Select</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                      </select>
                                </td>
                            </tr>
                            <td align="left">
                                <b>Diet</b> :
                            </td>
                            <td align="left">
                                 <select name="ediet">
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Doesn't Matter">Doesn't Matter</option>
                                </select>
                            </td>
                            <td align="right">
                            <b>Horoscope Required </b>:
                            </td>
                            <td align="left" class="Label">
                                <select>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>
                                </select>    
                            </td>
                            <td align="left">
                                <b>Marital Status </b>:
                            </td>
                            <td align="left" class="Label">
                                    <select name="emartialStatus">
                                        <option value="Unmarried">Unmarried</option>
                                        <option value="Married">Married</option>
                                        <option value="Widow">Widow/Widower</option>
                                        <option value="">Divorce</option>
                                        <option value="Doesnt">Doesnt Matter</option>
                                    </select>
                            </td>
                        <tr>
                            <td>
                                <b>Caste </b>:
                            </td>
                            <td align="left">
                                <select name="ecaste"  id="ecaste" class="dd_NoWidth">
                                <option selected="selected" value="0">Select</option>
                                <option value="1">Any</option>
                                <option value="Others">Others</option>
                                </select>
                            </td>
                            <td  align="right">
                                <b>Sub Caste</b> :
                            </td>
                            <td align="left">
                                    <select name="esubcaste" id="esubcaste" class="dd_NoWidth" >
                                    <option selected="selected" value="0">select</option>
                                    <option value="1">Any</option>
                                    <option value="Others">Others</option>
                                    </select>                                                        
                            </td>
                            <td align="left">
                            </td>
                        </tr>
                        <tr><td>&nbsp;&nbsp;</td></tr>
                        <tr>
                            <td colSpan={2}>
                                <b>Any other Comments - இதர விபரங்கள் :  </b>
                             </td>
                             <td align="right" class="Label">
                             :
                             </td>
                             <td align="left" valign="middle" colSpan={1}>
                                <textarea name="othercomments" rows="4" cols="40" 
                                    id="othercomments" class="TextBox"></textarea>
                            </td>
                        </tr>
                        </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>
                                Fees Details
                            </h4>
                        </div>
 
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Amount</b>
                            </label>
                            <input
                            type="input"
                            className="form-input"
                            name="txtamount"
                            value="1000"
                            />
                        </div>
                        
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Amount Paid Date</b>
                            </label>
                            <input
                            type="date"
                            className="form-input"
                            name="JoiningDate"
                            value={formValue?.JoiningDate}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Mode Of Payment</b>
                            </label>
                            <select
                            id=""
                            className="form-input"
                            name="Performance"
                            value={formValue?.Performance}
                            onChange={handleChange}
                            >
                            <option value="cash">CASH</option>
                            <option value="cheque">CHEQUE</option>
                            <option value="Google Pay">GOOGLE PAY</option>
                            <option value="Phone Pay">GOOGLE PAY</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Reference</b>
                            </label>
                            <input
                            type="input"
                            className="form-input"
                            name="txtamount"
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Scheme</b>
                            </label>
                            <select name="ddlScheme" className="form-input">
                                <option value="normal" selected>Normal</option>
                                <option value="premium">Premium</option>
                            </select>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">
                            {isUpdate ? "UPDATE":"SUBMIT"}
                            </button>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default UpdateVaran;