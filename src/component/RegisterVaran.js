import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Raasi from "./subcomponent/Raasi";
import axios from 'axios';

const RegisterVaran = () => {

    const [isUpdate, setIsUpdating] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
      
    const [txtHoro1, setTxtHoro1] = useState("1");
    const [txtHoro2, setTxtHoro2] = useState("2");
    const [txtHoro3, setTxtHoro3] = useState("3");
    const [txtHoro4, setTxtHoro4] = useState("4");
    const [txtHoro5, setTxtHoro5] = useState("5");
    const [txtHoro6, setTxtHoro6] = useState("6");
    const [txtHoro7, setTxtHoro7] = useState("7");
    const [txtHoro8, setTxtHoro8] = useState("8");
    const [txtHoro9, setTxtHoro9] = useState("9");
    const [txtHoro10, setTxtHoro10] = useState("10");
    const [txtHoro11, setTxtHoro11] = useState("11");
    const [txtHoro12, setTxtHoro12] = useState("12");

    function handleHoroscope1Change(e) {
        setTxtHoro1(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro1']: value });
    }
    function handleHoroscope2Change(e) {
        setTxtHoro2(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro2']: value });
    }
    function handleHoroscope3Change(e) {
        setTxtHoro3(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro3']: value });
    }
    function handleHoroscope4Change(e) {
        setTxtHoro4(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro4']: value });
    }
    function handleHoroscope5Change(e) {
        setTxtHoro5(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro5']: value });
    }
    function handleHoroscope6Change(e) {
        setTxtHoro6(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro6']: value });
    }
    function handleHoroscope7Change(e) {
        setTxtHoro7(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro7']: value });
    }
    function handleHoroscope8Change(e) {
        setTxtHoro8(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro8']: value });
    }
    function handleHoroscope9Change(e) {
        setTxtHoro9(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro9']: value });
    }
    function handleHoroscope10Change(e) {
        setTxtHoro10(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro10']: value });
    }
    function handleHoroscope11Change(e) {
        setTxtHoro11(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro11']: value });
    }
    function handleHoroscope12Change(e) {
        setTxtHoro12(e.target.value);
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, ['txtHoro12']: value });
    }

    const [formVaran, setFormVaran] = useState({
        txtName: "",
        ddlSex: "",
        txtDob: "",
        ddlTimeOfBirth: "00",
        ddlMinOfBirth: "00",
        ddlSecOfBirth: "AM",
        txtPlaceOfBirth: "",
        txtNativity: "",
        ddlMotherTongue: "",
        ddlMaritialStatus: "",
        txtFatherName: "",
        ddlFatherAlive: "",
        txtFatherJob: "",
        txtMotherName: "",
        ddlMotherAlive: "",
        txtMotherJob: "",
        ddlMarriedElderBrothers: "0",
        ddlMarriedYoungerBrothers: "0",
        ddlMarriedElderSisters: "0",
        ddlMarriedYoungerSisters: "0",
        ddlUnMarriedElderBrothers: "0",
        ddlUnMarriedYoungerBrothers: "0",
        ddlUnMarriedElderSisters: "0",
        ddlUnMarriedYoungerSisters: "0",
        ddlResidentialType : "",
        ddlVehicleOwned : "",
        txtOtherDetails: "",
        ddlHeight: "50",
        ddlWeight: "50",
        ddlBloodGroup: "",
        ddlDiet: "",
        ddlComplexion: "", 
        ddlPhysicalStatus: "",
        txtQualification: "",
        txtJob: "",
        txtPlaceOfJob: "",
        txtIncome: "1000",
        ddlCaste: "",
        ddlSubCaste: "",
        txtGothram: "",
        ddlStar: "",
        ddlRaasiSign: "",
        ddlLaknamNo: "",
        ddlLaknam: "",
        txtPermanentAddress: "",
        txtPresentAddress: "",
        txtLandLineNumbers: "",
        txtContactPerson: "",
        txtMobileNo: "",
        txtEmail: "",
        txtDasa: "",
        txtDasaYears: "",
        txtDasaMonths: "",
        txtDasaDays: "",
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
        txtExpQualification: "",
        txtExpPlaceOfJob: "",
        txtExpIncome: "1000",
        ddlExpJob:"",
        ddlPreferredAgeFrom: "20",
        ddlPreferredAgeTo: "35",
        ddlExpCaste: "",
        ddlExpSubCaste: "",
        txtOtherComments: "",
        ddlExpDiet : "",
        ddlExpHaroscopeRequired : "",
        ddlExpMartialStatus: "",
        ddlScheme: "1",
        txtAmount: "1000",
        txtTransactionDate: "",
        ddlModeOfPayment: "",
        txtReference: ""
    });

    function handleSubmit(event)  {
        event.preventDefault();
        axios.post('http://localhost:8089/registerVaran/save', formVaran)
            .then( res => { 
                console.log("post - handleSubmit");
                console.log(res);
                navigate("/viewVaran");
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
                <div className="container-fluid rounded-div" >
                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h4 className="m-0"><b>REGISTER VARAN -</b> மணமகள், மணமகன் விபரம் சேகரிப்பு</h4>
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
                                name="txtName"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                 <b>Sex</b>
                                </label><br/>
                                <select name="ddlSex" id="ddlSex" class="dd_NoWidth" 
                                     className="font-size-13"  onChange={handleChange}>
                                    <option value="0-பாலினம்" selected="selected" >பாலினம்</option>
                                    <option value="1-Male ஆண்" >Male - ஆண்</option>
                                    <option value="2-Female பெண்">Female - பெண்</option>
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
                                name="txtDob"
                                id="txtDob"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-15">
                                <b>Time of Birth - பிறந்த நேரம்</b>
                                </label> <br/>
                                <select name="ddlTimeOfBirth" id="ddlTimeOfBirth" class="dd_NoWidth"
                                   onChange={handleChange}>
                                <option value="0-HR" selected="selected">HR</option>
                                <option value="1-1">1</option>
                                <option value="2-2">2</option>
                                <option value="3-3">3</option>
                                <option value="4-4">4</option>
                                <option value="5-5">5</option>
                                <option value="6-6">6</option>
                                <option value="7-7">7</option>
                                <option value="8-8">8</option>
                                <option value="9-9">9</option>
                                <option value="10-10">10</option>
                                <option value="11-11">11</option>
                                <option value="12-12">12</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                        <select name="ddlMinOfBirth" id="ddlMinOfBirth" class="dd_NoWidth"
                             onChange={handleChange}>
                            <option value="0-MIN" selected>MIN</option>
                            <option value="0-00">00</option>
                            <option value="1-01">01</option>
                            <option value="2-02">02</option>
                            <option value="3-03">03</option>
                            <option value="4-04">04</option>
                            <option value="5-05">05</option>
                            <option value="6-06">06</option>
                            <option value="7-07">07</option>
                            <option value="8-08">08</option>
                            <option value="9-09">09</option>
                            <option value="10-10">10</option>
                            <option value="11-11">11</option>
                            <option value="12-12">12</option>
                            <option value="13-13">13</option>
                            <option value="14-14">14</option>
                            <option value="15-15">15</option>
                            <option value="16-16">16</option>
                            <option value="17-17">17</option>
                            <option value="18-18">18</option>
                            <option value="19-19">19</option>
                            <option value="20-20">20</option>
                            <option value="21-21">21</option>
                            <option value="22-22">22</option>
                            <option value="23-23">23</option>
                            <option value="24-24">24</option>
                            <option value="25-25">25</option>
                            <option value="26-26">26</option>
                            <option value="27-27">27</option>
                            <option value="28-28">28</option>
                            <option value="29-29">29</option>
                            <option value="30-30">30</option>
                            <option value="31-31">31</option>
                            <option value="32-32">32</option>
                            <option value="33-33">33</option>
                            <option value="34-34">34</option>
                            <option value="35-35">35</option>
                            <option value="36-36">36</option>
                            <option value="37-37">37</option>
                            <option value="38-38">38</option>
                            <option value="39-39">39</option>
                            <option value="40-40">40</option>
                            <option value="41-41">41</option>
                            <option value="42-42">42</option>
                            <option value="43-43">43</option>
                            <option value="44-44">44</option>
                            <option value="45-45">45</option>
                            <option value="46-46">46</option>
                            <option value="47-47">47</option>
                            <option value="48-48">48</option>
                            <option value="49-49">49</option>
                            <option value="50-50">50</option>
                            <option value="51-51">51</option>
                            <option value="52-52">52</option>
                            <option value="53-53">53</option>
                            <option value="54-54">54</option>
                            <option value="55-55">55</option>
                            <option value="56-56">56</option>
                            <option value="57-57">57</option>
                            <option value="58-58">58</option>
                            <option value="59-59">59</option>
                    </select>
                        &nbsp;&nbsp;
                        <select name="ddlSecOfBirth" id="ddlSecOfBirth" class="dd_NoWidth"
                             onChange={handleChange}>
                        <option value="0-காலம்" selected>காலம்</option>
                        <option value="1-AM">AM - காலை</option>
                        <option value="2-PM">PM - மாலை</option>
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
                                name="txtPlaceOfBirth"
                                id="txtPlaceOfBirth"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                <b>Nativity</b>
                                </label>
                                <input
                                type="text"
                                placeholder="பிறப்பிடம்"
                                className="form-input"
                                name="txtNativity"
                                id="txtNativity"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                <b>Mother Tongue</b>
                                </label>
                                <select
                                placeholder="தாய் மொழி"
                                className="form-input"
                                name="ddlMotherTongue"
                                id="ddlMotherTongue"
                                onChange={handleChange}>
                                    <option value="0-தாய் மொழி" selected="selected">தாய் மொழி</option>
                                    <option value="1-Tamil தமிழ்" >Tamil - தமிழ்</option>
                                    <option value="2-Telugu தெலுங்கு" >Telugu - தெலுங்கு</option>
                                    <option value="3-Malayalam மலையாளம்" >Malayalam - மலையாளம்</option>
                                    <option value="4-Kannada கன்னடம்" >Kannada - கன்னடம்</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Marital status </b><br/>
                                <select name="ddlMaritialStatus" id="ddlMaritialStatus" class="dd_NoWidth" 
                                     onChange={handleChange}>
                                    <option value="0-திருமண தகுதி நிலை" selected="selected">திருமண தகுதி நிலை</option>
                                    <option value="1-Unmarried">Unmarried - திருமணம் ஆகாதவர்</option>
                                    <option value="2-Married">Married - திருமணம் ஆணவர்</option>
                                    <option value="3-Widow">Widow - விதவை</option>
                                    <option value="4-Widower">Widower - விதவர்</option>
                                    <option value="5-Divorce">Divorce - விவாகரத்தானவர்</option>
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
                                name="txtFatherName"
                                id="txtFatherName"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Father's Alive</b> <br/>
                                <select name="ddlFatherAlive" id="ddlFatherAlive" class="dd_NoWidth" 
                                 onChange={handleChange}>
                                    <option value="0-தந்தை நிலை குறித்து" selected="selected">தந்தை நிலை குறித்து</option>
                                    <option value="1-Alive">Alive</option>
                                    <option value="2-Dead">Dead</option>
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
                                name="txtFatherJob"
                                id="txtFatherJob"
                                onChange={handleChange}
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
                                name="txtMotherName"
                                id="txtMotherName"
                                 onChange={handleChange}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Mother's Alive</b> <br/>
                                <select name="ddlMotherAlive" id="ddlMotherAlive" class="dd_NoWidth"
                                     onChange={handleChange} >
                                    <option value="0-தாயார் நிலை குறித்து" selected="selected">தாயார் நிலை குறித்து</option>
                                    <option value="1-Alive">Alive</option>
                                    <option value="2-Dead">Dead</option>
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
                                name="txtMotherJob"
                                id="txtMotherJob"
                                onChange={handleChange}
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
                                <td>&nbsp;</td>
                            </tr>
                            <tr >
                                <td class="Label">
                                    <b>Married</b>
                                </td>
                                <td>
                                    <select name="ddlMarriedElderBrothers" id="ddlMarriedElderBrothers" class="dd_NoWidth_WhiteBorder" 
                                        onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedYoungerBrothers" id="ddlMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder" 
                                         onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
                                 </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedElderSisters" id="ddlMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                         onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedYoungerSisters" id="ddlMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                         onChange={handleChange} >
                                        <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                        <option value="1-0 நபர்கள்">0</option>
                                        <option value="2-1 நபர்கள்">1</option>
                                        <option value="3-2 நபர்கள்">2</option>
                                        <option value="4-3 நபர்கள்">3</option>
                                        <option value="5-4 நபர்கள்">4</option>
                                        <option value="6-5 நபர்கள்">5 and above</option>
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
                                    <select name="ddlUnMarriedElderBrothers" id="ddlUnMarriedElderBrothers" class="dd_NoWidth_WhiteBorder" 
                                         onChange={handleChange}>
                                        <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                        <option value="1-0 நபர்கள்">0</option>
                                        <option value="2-1 நபர்கள்">1</option>
                                        <option value="3-2 நபர்கள்">2</option>
                                        <option value="4-3 நபர்கள்">3</option>
                                        <option value="5-4 நபர்கள்">4</option>
                                        <option value="6-5 நபர்கள்">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedYoungerBrothers" id="ddlUnMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder"
                                      onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedElderSisters" id="ddlUnMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                      onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedYoungerSisters" id="ddlUnMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                       onChange={handleChange}>
                                    <option value="0-நபர்கள்" selected>நபர்கள்</option>
                                    <option value="1-0 நபர்கள்">0</option>
                                    <option value="2-1 நபர்கள்">1</option>
                                    <option value="3-2 நபர்கள்">2</option>
                                    <option value="4-3 நபர்கள்">3</option>
                                    <option value="5-4 நபர்கள்">4</option>
                                    <option value="6-5 நபர்கள்">5 and above</option>
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
                                        <b>Residential Type</b><br />
                                        <b>(Parent Own House / Varan Own House/ Rented House )</b>
                                    </td>
                                    <td style={{width: "1px"}} align="right" class="Label">
                                     &nbsp;&nbsp;
                                    </td>
                                    <td align="left" valign="middle">
                                        <select name="ddlResidentialType" id="ddlResidentialType">
                                            <option value="0-தங்கும் வசதி">தங்கும் வசதி</option>
                                            <option value="1-Father House">Father House - தகப்பனார் வீடு</option>
                                            <option value="2-Own House">Own House - சொந்த வீடு</option>
                                            <option value="3-Rented House">Rented House - வாடகை வீடு</option>
                                            <option value="4-Family House">Family House - குடும்ப வீடு</option>
                                            <option value="5-Company House">Company House - குவாட்டர்ஸ் வீடு</option>
                                            <option value="6-No Answer">No Answer - பதில் இல்லை</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="left" class="Label" valign="middle">
                                        <b>Vehicle Owned</b><br />
                                        <b>(2 Wheeler / 4 Wheeler /  2 + 4 Wheeler )</b>
                                    </td>
                                    <td style={{width: "1px"}} align="right" class="Label">
                                     &nbsp;&nbsp;
                                    </td>
                                    <td align="left" valign="middle">
                                        <select name="ddlVehicleOwned" id="ddlVehicleOwned">
                                            <option value="0-வாகன வசதி">வாகன வசதி </option>
                                            <option value="1-No Vehicle">வாகன வசதி இல்லை</option>
                                            <option value="2-2_Wheeler">2 Wheeler - இரு சக்கர வாகனம்</option>
                                            <option value="3-4_Wheeler">4 Wheeler - நான்கு சக்கர வாகனம்</option>
                                            <option value="4-2+4_Wheeler">2+4 Wheeler - இரு நான்கு சக்கர வாகனம்</option>
                                            <option value="5-No_Answer">No Answer - பதில் இல்லை</option>
                                        </select>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td align="left" class="Label" valign="middle">
                                        <b>Any Others Details</b><br />
                                        <b>(Talents, Acheivements, Likes, Visa Status, Family details, God etc)</b>
                                    </td>
                                    <td style={{width: "1px"}} align="right" class="Label">
                                     &nbsp;&nbsp;
                                    </td>
                                    <td align="left" valign="middle">
                                        <textarea name="txtOtherDetails" rows="2" cols="10" 
                                         placeholder="இதர விபரங்கள்"   id="txtOtherDetails" 
                                         class="textbox" style={{height:"80px", width: "665px" }}
                                         onChange={handleChange}></textarea>
                                    </td>
                                </tr>
                            </table>
                            </div>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color : "white"}}>Physical Attributes</h4>
                            </div>
                            <div>
                            <table>
                                <tr>
                                    <td style={{width:"140"}}>
                                        <b>Height </b> : 
                                    </td>
                                    <td align="left">
                                    <select name="ddlHeight" id="ddlHeight" class="dd_NoWidth" style={{width: "150px"}}
                                        onChange={handleChange}>
                                    <option value="0-உயரம் _ft_">உயரம் -ft-</option>
                                    <option value="1-Below 4ft ">Below 4ft - 121 cm</option>
                                    <option value="2-4ft">4ft - 121 cm</option>
                                    <option value="3-4ft 1in">4ft 1in - 124cm</option>
                                    <option value="4-4ft 2in">4ft 2in - 127cm</option>
                                    <option value="5-4ft 3in">4ft 3in - 129cm</option>
                                    <option value="6-4ft 4in">4ft 4in - 132cm</option>
                                    <option value="7-4ft 5in">4ft 5in - 134cm</option>
                                    <option value="8-4ft 6in">4ft 6in - 137cm</option>
                                    <option value="9-4ft 7in">4ft 7in - 139cm</option>
                                    <option value="10-4ft 8in">4ft 8in - 142cm</option>
                                    <option value="11-4ft 9in">4ft 9in - 144cm</option>
                                    <option value="12-4ft 10in">4ft 10in - 147cm</option>
                                    <option value="13-4ft 11in">4ft 11in - 149cm</option>
                                    <option value="14-5ft">5ft - 152cm</option>
                                    <option value="15-5ft">5ft 1in - 154cm</option>
                                    <option value="16-5ft 2in">5ft 2in - 157cm</option>
                                    <option value="17-5ft 3in">5ft 3in - 160cm</option>
                                    <option value="18-5ft 4in">5ft 4in - 162cm</option>
                                    <option value="19-5ft 5in">5ft 5in - 165cm</option>
                                    <option value="20-5ft 6in">5ft 6in - 167cm</option>
                                    <option value="21-5ft 7in">5ft 7in - 170cm</option>
                                    <option value="22-5ft 8in">5ft 8in - 172cm</option>
                                    <option value="23-5ft 9in">5ft 9in - 175cm</option>
                                    <option value="24-5ft 10in">5ft 10in - 177cm</option>
                                    <option value="25-5ft 11in">5ft 11in - 180cm</option>
                                    <option value="26-6ft">6ft - 182cm</option>
                                    <option value="27-6ft 1in">6ft 1in - 185cm</option>
                                    <option value="28-6ft 2in">6ft 2in - 187cm</option>
                                    <option value="29-6ft 3in">6ft 3in - 190cm</option>
                                    <option value="30-6ft 4in">6ft 4in - 193cm</option>
                                    <option value="31-6ft 5in">6ft 5in - 195cm</option>
                                    <option value="32-6ft 6in">6ft 6in - 198cm</option>
                                    <option value="33-6ft 7in">6ft 7in - 200cm</option>
                                    <option value="34-6ft 8in">6ft 8in - 203cm</option>
                                    <option value="35-6ft 9in">6ft 9in - 205cm</option>
                                    <option value="36-6ft 10in">6ft 10in - 208cm</option>
                                    <option value="37-6ft 11in">6ft 11in - 210cm</option>
                                    <option value="38-7ft">7ft - 213cm</option>
                                    </select>
                                </td>
                                <td>
                                    <b> Weight </b>: &nbsp;&nbsp;
                                </td>
                                <td align="left">
                                    <select name="ddlWeight" id="ddlWeight" class="dd_NoWidth"
                                        onChange={handleChange}>
                                    <option value="0-எடை Kgs"> எடை - Kgs -</option>
                                    <option value="1-41 kg">41 kg</option>
                                    <option value="2-42 kg">42 kg</option>
                                    <option value="3-43 kg">43 kg</option>
                                    <option value="4-44 kg">44 kg</option>
                                    <option value="5-45 kg">45 kg</option>
                                    <option value="6-46 kg">46 kg</option>
                                    <option value="7-47 kg">47 kg</option>
                                    <option value="8-48 kg">48 kg</option>
                                    <option value="9-49 kg">49 kg</option>
                                    <option value="10-50 kg">50 kg</option>
                                    <option value="11-51 kg">51 kg</option>
                                    <option value="12-52 kg">52 kg</option>
                                    <option value="13-53 kg">53 kg</option>
                                    <option value="14-54 kg">54 kg</option>
                                    <option value="15-55 kg">55 kg</option>
                                    <option value="16-56 kg">56 kg</option>
                                    <option value="17-57 kg">57 kg</option>
                                    <option value="18-58 kg">58 kg</option>
                                    <option value="19-59 kg">59 kg</option>
                                    <option value="20-60 kg">60 kg</option>
                                    <option value="21-61 kg">61 kg</option>
                                    <option value="22-62 kg">62 kg</option>
                                    <option value="23-63 kg">63 kg</option>
                                    <option value="24-64 kg">64 kg</option>
                                    <option value="25-65 kg">65 kg</option>
                                    <option value="26-66 kg">66 kg</option>
                                    <option value="27-67 kg">67 kg</option>
                                    <option value="28-68 kg">68 kg</option>
                                    <option value="29-69 kg">69 kg</option>
                                    <option value="30-70 kg">70 kg</option>
                                    <option value="31-71 kg">71 kg</option>
                                    <option value="32-72 kg">72 kg</option>
                                    <option value="33-73 kg">73 kg</option>
                                    <option value="34-74 kg">74 kg</option>
                                    <option value="35-75 kg">75 kg</option>
                                    <option value="36-76 kg">76 kg</option>
                                    <option value="37-77 kg">77 kg</option>
                                    <option value="38-78 kg">78 kg</option>
                                    <option value="39-79 kg">79 kg</option>
                                    <option value="40-80 kg">80 kg</option>
                                    <option value="41-81 kg">81 kg</option>
                                    <option value="42-82 kg">82 kg</option>
                                    <option value="43-83 kg">83 kg</option>
                                    <option value="44-84 kg">84 kg</option>
                                    <option value="45-85 kg">85 kg</option>
                                    <option value="46-86 kg">86 kg</option>
                                    <option value="47-87 kg">87 kg</option>
                                    <option value="48-88 kg">88 kg</option>
                                    <option value="49-89 kg">89 kg</option>
                                    <option value="50-90 kg">90 kg</option>
                                    <option value="51-91 kg">91 kg</option>
                                    <option value="52-92 kg">92 kg</option>
                                    <option value="53-93 kg">93 kg</option>
                                    <option value="54-94 kg">94 kg</option>
                                    <option value="55-95 kg">95 kg</option>
                                    <option value="56-96 kg">96 kg</option>
                                    <option value="57-97 kg">97 kg</option>
                                    <option value="58-98 kg">98 kg</option>
                                    <option value="59-99 kg">99 kg</option>
                                    <option value="60-100 kg">100 kg</option>
                                    <option value="61-101 kg">101 kg</option>
                                    <option value="62-102 kg">102 kg</option>
                                    <option value="63-103 kg">103 kg</option>
                                    <option value="64-104 kg">104 kg</option>
                                    <option value="65-105 kg">105 kg</option>
                                    <option value="66-106 kg">106 kg</option>
                                    <option value="67-107 kg">107 kg</option>
                                    <option value="68-108 kg">108 kg</option>
                                    <option value="69-109 kg">109 kg</option>
                                    <option value="70-110 kg">110 kg</option>
                                    <option value="71-111 kg">111 kg</option>
                                    <option value="72-112 kg">112 kg</option>
                                    <option value="73-113 kg">113 kg</option>
                                    <option value="74-114 kg">114 kg</option>
                                    <option value="75-115 kg">115 kg</option>
                                    <option value="76-116 kg">116 kg</option>
                                    <option value="77-117 kg">117 kg</option>
                                    <option value="78-118 kg">118 kg</option>
                                    <option value="79-119 kg">119 kg</option>
                                    <option value="80-120 kg">120 kg</option>
                                    <option value="81-121 kg">121 kg</option>
                                    <option value="82-122 kg">122 kg</option>
                                    <option value="83-123 kg">123 kg</option>
                                    <option value="84-124 kg">124 kg</option>
                                    <option value="85-125 kg">125 kg</option>
                                    <option value="86-126 kg">126 kg</option>
                                    <option value="87-127 kg">127 kg</option>
                                    <option value="88-128 kg">128 kg</option>
                                    <option value="89-129 kg">129 kg</option>
                                    <option value="90-130 kg">130 kg</option>
                                    <option value="91-131 kg">131 kg</option>
                                    <option value="92-132 kg">132 kg</option>
                                    <option value="93-133 kg">133 kg</option>
                                    <option value="94-134 kg">134 kg</option>
                                    <option value="95-135 kg">135 kg</option>
                                    <option value="96-136 kg">136 kg</option>
                                    <option value="97-137 kg">137 kg</option>
                                    <option value="98-138 kg">138 kg</option> 
                                    <option value="99-139 kg">139 kg</option>
                                    <option value="100-140 kg">140 kg</option>
                                    </select>
                                </td>
                                <td align="right" class="Label">
                                        <b>Blood Group</b> : &nbsp;
                                </td>
                                <td  align="left">
                                    <select name="ddlBloodGroup" id="ddlBloodGroup" class="dd_NoWidth"
                                        onChange={handleChange}>
                                    <option value="0-Select_குருதி வகை">-Select- குருதி வகை</option>
                                    <option value="1-O Positive">O Positive</option>
                                    <option value="2-A Positive">A Positive</option>
                                    <option value="3-B Positive">B Positive</option>
                                    <option value="4-AB Positive">AB Positive</option>
                                    <option value="5-O Negative">ONegative</option>
                                    <option value="6-A Negative">A Negative</option>
                                    <option value="7-B Negative">B Negative</option>
                                    <option value="8-AB Negative">AB Negative</option>
                                    </select>
                                </td>
                                </tr>
                                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                <tr>
                                    <td>
                                        <b>Diet </b>: &nbsp;&nbsp;
                                    </td>
                                    <td align="left">
                                        <select name="ddlDiet" id="ddlDiet" onChange={handleChange}>
                                            <option value="0-உணவு விபரம்" selected="selected">உணவு விபரம்</option>
                                            <option value="1-Vegetarian">Vegetarian</option>
                                            <option value="2-NonVegetarian">Non-Vegetarian</option>
                                            <option value="3-Eggetarian">Eggetarian</option>
                                        </select>    
                                    </td>
                                    <td align="left">
                                        <b>Disability</b> : &nbsp;
                                    </td>
                                    <td>                    
                                        <select name="ddlPhysicalStatus" id="ddlPhysicalStatus" onChange={handleChange}>
                                            <option value="0-ஊனம்" selected="selected">ஊனம்</option>
                                            <option value="1-Normal" checked="checked" >No-இல்லை</option>
                                            <option value="2-PhysicallyChallenged" >Yes-ஆம்</option>    
                                            <option value="3-EyeBlindness" >EyeBlindness -பார்வை குறை</option>       
                                            <option value="4-Deaf" >Deaf -காது கேளாமை</option> 
                                            <option value="5-Dump" >Dump -பேச்சு குறைப்பாடு</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                        </select>    
                                    </td>
                                    <td align="left" class="Label">
                                        <b>Complexion</b> : &nbsp;
                                    </td>
                                    <td align="left">
                                        <select name="ddlComplexion" id="ddlComplexion" onChange={handleChange}>
                                            <option value="0-Select_உடல் நிறம்">-Select- உடல் நிறம்</option>
                                            <option value="1-VeryFair" >Very Fair</option>
                                            <option value="2-Fair" >Fair</option>
                                            <option value="3-Wheatish" >Wheatish</option>
                                            <option value="4-Wheatishbrown" >Wheatish brown</option>
                                            <option value="5-Dark" >Dark</option>
                                        </select>    
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
                                            <div className="col-3">
                                            <label htmlFor="" className="font-size-14">
                                            <b>Education</b>
                                            </label>
                                            <select
                                            placeholder="படிப்பு"
                                            className="form-input"
                                            name="ddlEducation"
                                            id="ddlEducation"
                                            class="TextBox"
                                            onChange={handleChange}
                                            >
                                                <option value="0-பட்டபடிப்பு">பட்டபடிப்பு</option>
                                                <option value="1-PHD DOCTOR">PHD DOCTOR</option>
                                                <option value="2-MASTER DEGREE">MASTER DEGREE</option>
                                                <option value="3-BACHELOR DEGREE">BACHELOR DEGREE</option>
                                                <option value="4-DIPLAMA">DIPLAMA</option>
                                                <option value="5-ITI">ITI</option>
                                                <option value="6-HSC">+2 - HSC</option>
                                                <option value="7-SSLC">10 - SSLC</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td align="left">
                                            <div className="col-3">
                                            <label htmlFor="" className="font-size-14">
                                            <b>Qualification</b>
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="கல்வி தகுதி"
                                            className="form-input"
                                            name="txtQualification"
                                            id="txtQualification"
                                            class="TextBox"
                                            onChange={handleChange}
                                            />
                                        </div>
                                    </td>
                                    <td align="left">
                                    <div className="col-3">
                                        <label htmlFor="" className="font-size-14">
                                        <b>Job</b>
                                        </label>
                                        <input
                                        type="text"
                                        placeholder="உத்யோகம்"
                                        className="form-input"
                                        name="txtJob"
                                        id="txtJob"
                                        class="TextBox"
                                        onChange={handleChange}
                                        />
                                    </div>
                                    
                                    </td>
                                    <td align="left">
                                        
                                    <div className="col-4">
                                        <label htmlFor="" className="font-size-14">
                                        <b>Place </b>
                                        </label>
                                        <input
                                        type="text"
                                        placeholder="வேலை பார்க்கும் இடம்"
                                        className="form-input"
                                        name="txtPlaceOfJob"
                                        id="txtPlaceOfJob"
                                        class="TextBox"
                                        onChange={handleChange}
                                        />
                                    </div>
                                    </td>
                                    <td>
                                        <div className="col-4">
                                        <label htmlFor="" className="font-size-14">
                                        <b>Income</b>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="மாத வருமானம்"
                                            className="form-input"
                                            name="txtIncome"
                                            id="txtIncome"
                                            class="TextBox"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    </td>
                                    <td>
                                        <div className="col-4">
                                        <label htmlFor="" className="font-size-14">
                                        <b>Office</b>
                                        </label>
                                        <select
                                            className="form-input"
                                            name="txtOffice"
                                            id="txtOffice"
                                            class="TextBox"
                                            onChange={handleChange}
                                            >
                                                <option value="0-அலுவலகம்">அலுவலகம்</option>
                                                <option value="9-Own Business">Own Business</option>
                                                <option value="1-MNC">MNC</option>
                                                <option value="2-Pvt. Ltd">Pvt. Ltd</option>
                                                <option value="3-Govt. Office">Govt. Office</option>
                                                <option value="4-Police Dept.">Police Dept</option>
                                                <option value="5-Foreign">Foreign</option>
                                                <option value="6-Daily Wages">Daily Wager</option>
                                                <option value="7-Factory">Factory</option>
                                                <option value="8-Others">Others</option>
                                            </select>
                                    </div>
                                    </td>
                                </tr>
                        </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>Caste Details </h4>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <td> <b>Caste </b>: &nbsp; &nbsp; </td>
                                    <td> 
                                        <select name="ddlCaste"  id="ddlCaste" class="dd_NoWidth" 
                                            onChange={handleChange} >
                                            <option selected="selected" value="0-Select_ஜாதி">Select - ஜாதி</option>
                                            <option value="1-Any">Any</option>
                                            <option value="2-Naidu">Naidu</option>
                                            <option value="3-Vanniyar">Vanniyar</option>
                                            <option value="4-Chettiyar">Chettiyar</option>
                                            <option value="5-Mudhalaiyar">Mudhalaiyar</option>
                                            <option value="6-Gounder">Gounder</option>
                                            <option value="7-Brahmin">Brahmin</option>
                                            <option value="8-Devar">Devar</option>
                                            <option value="9-Others">Others</option>
                                        </select>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td><b>Sub Caste</b> : &nbsp; &nbsp; </td>
                                    <td>
                                        <input type="text" name="ddlSubCaste" id="ddlSubCaste"
                                            placeholder="உட்பிரிவு" class="dd_NoWidth" 
                                          onChange={handleChange}/>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td align="right" class="Label">
                                        <b>Gothram </b>: &nbsp;&nbsp;
                                    </td>
                                    <td >
                                        <input name="txtGothram" type="text" id="txtGothram" 
                                            placeholder="கோத்திரம்" class="TextBox" 
                                            onChange={handleChange}/>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                            </table>
                        </div>
                        <div style={{backgroundColor: "DodgerBlue"}}>
                            <h4 style={{color : "white"}}>Astrology Details </h4>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <b>Star</b> : &nbsp;&nbsp;
                                    </td>
                                    <td>
                                    <select name="ddlStar" id="ddlStar" class="dd_NoWidth"
                                         onChange={handleChange}>
                                        <option value="0-Select Star">-- Select Star --</option>
                                        <option value="1-அசுவினி">ASWINI-அசுவினி</option>
                                        <option value="2-பரணி">BARANI-பரணி</option>
                                        <option value="3-கிருத்திகை">KRITHIGAI-கிருத்திகை</option>
                                        <option value="4-ரோகிணி">ROHINI-ரோகிணி</option>
                                        <option value="5-மிருகசீரிடம்">MIRUGASIRISHAM-மிருகசீரிடம்</option>
                                        <option value="6-திருவாதிரை">THIRUVADIRAI-திருவாதிரை </option>
                                        <option value="7-புனர்பூசம்">PUNARPOOSAM-புனர்பூசம் </option>
                                        <option value="8-பூசம்">POOSAM-பூசம்</option> 
                                        <option value="9-ஆயில்யம்">AYILYAM-ஆயில்யம்</option> 
                                        <option value="10-மகம்">MAGAM-மகம்</option> 
                                        <option value="11-பூரம்">POORAM-பூரம் </option>
                                        <option value="12-உத்திரம்">UTHIRAM-உத்திரம் </option>
                                        <option value="13-அஸ்தம்">ASTHAM-அஸ்தம் </option>
                                        <option value="14-சித்திரை">CHITRAI-சித்திரை</option>
                                        <option value="15-சுவாதி">SWATHI-சுவாதி</option>
                                        <option value="16-விசாகம்">VISAGAM-விசாகம்</option>
                                        <option value="17-அனுஷம்">ANUSHAM-அனுஷம்</option>
                                        <option value="18-கேட்டை">KETTAI-கேட்டை </option>
                                        <option value="19-மூலம்">MOOLAM-மூலம் </option>
                                        <option value="20-பூராடம்">POORADAM-பூராடம் </option>
                                        <option value="21-உத்திராடம்">UTHIRADAM-உத்திராடம் </option>
                                        <option value="22-திருவோணம்">THIRUVONAM-திருவோணம்</option>
                                        <option value="23-அவிட்டம்">AVITTAM-அவிட்டம் </option>
                                        <option value="24-சதயம்">SADAYAM-சதயம்</option>	
                                        <option value="25-பூரட்டாதி">POORATTATHI-பூரட்டாதி</option>
                                        <option value="26-உத்திரட்டாதி">UTTHIRATTATHI-உத்திரட்டாதி</option>
                                        <option value="27-ரேவதி">REVATHI-ரேவதி</option>
                                        </select>
                                    </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td>
                                        <b>Raasi/Moon Sign </b>: &nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <select name="ddlRaasiSign" id="ddlRaasiSign" class="dd_NoWidth"
                                          onChange={handleChange}>
                                            <option value="0-Select Rasi">-- Select Rasi --</option>
                                            <option value="1-மேஷம்">MESHAM-மேஷம்</option>
                                            <option value="2-ரிஷபம்">RISHABAM-ரிஷபம்</option>
                                            <option value="3-மிதுனம்">MITHUNAM-மிதுனம்</option>
                                            <option value="4-கடகம்">KATAKAM-கடகம்</option>
                                            <option value="5-சிம்மம்">SIMMAM-சிம்மம்</option>
                                            <option value="6-கன்னி">KANNI-கன்னி</option>
                                            <option value="7-துலாம்">THULAM-துலாம்</option>
                                            <option value="8-விருச்சி">VRICHIKA-விருச்சி</option>
                                            <option value="9-தனுஷ்">DHANUSU-தனுஷ்</option>
                                            <option value="10-மகரம்">MAGARAM-மகரம்</option>
                                            <option value="11-கும்பம்">KUMBHAM-கும்பம்</option>
                                            <option value="12-மீனம்">MEENAM-மீனம்</option>
                                        </select>
                                    </td>

                                    <td align="left" colSpan={3}>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="right" class="Label">
                                                    &nbsp;&nbsp;<b>Padam</b> : &nbsp;&nbsp;
                                                </td>
                                                <td align="left" class="Label">
                                                    <select name="ddlLaknamNo" id="ddlLaknamNo" class="dd_NoWidth"
                                                        onChange={handleChange}>
                                                        <option value="0-Select Padam பாதம்">-Select Padam பாதம்--</option>
                                                        <option value="1-1">1</option>
                                                        <option value="2-2">2</option>
                                                        <option value="3-3">3</option>
                                                        <option value="4-4">4</option>
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
                                                        onChange={handleChange}>
                                                    <option value="0-Select Laknam">-Select Laknam --</option>
                                                    <option value="1-மேஷம்">MESHAM-மேஷம்</option>
                                                    <option value="2-ரிஷபம்">RISHABAM-ரிஷபம்</option>
                                                    <option value="3-மிதுனம்">MITHUNAM-மிதுனம்</option>
                                                    <option value="4-கடகம்">KATAKAM-கடகம்</option>
                                                    <option value="5-சிம்மம்">SIMMAM-சிம்மம்</option>
                                                    <option value="6-கன்னி">KANNI-கன்னி</option>
                                                    <option value="7-துலாம்">THULAM-துலாம்</option>
                                                    <option value="8-விருச்சி">VRICHIKA-விருச்சி</option>
                                                    <option value="9-தனுஷ்">DHANUSU-தனுஷ்</option>
                                                    <option value="10-மகரம்">MAGARAM-மகரம்</option>
                                                    <option value="11-கும்பம்">KUMBHAM-கும்பம்</option>
                                                    <option value="12-மீனம்">MEENAM-மீனம்</option>
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
                                                    <textarea name="txtPermanentAddress" rows="4" cols="50" id="txtPermanentAddress"
                                                     class="TextBox" onChange={handleChange}
                                                        ></textarea>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>  Present Address </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <textarea name="txtPresentAddress" rows="4" cols="50" id="txtPresentAddress" 
                                                        class="TextBox" onChange={handleChange}></textarea>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b> Land Line Numbers </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <textarea name="txtLandLineNumbers" rows="4" cols="50" id="txtLandLineNumbers" 
                                                        class="TextBox" onChange={handleChange}></textarea>
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
                                                    <input name="txtContactPerson" type="text" id="txtContactPerson" size="40"
                                                        onChange={handleChange} class="TextBox" placeholder="தொடர்பு கொள்ளவேண்டியவர்"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>Mobile Number </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                <input name="txtMobileNo" type="text" id="txtMobileNo" size="30"
                                                  onChange={handleChange} placeholder="மொபைல் எண்" class="TextBox"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td align="right">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" class="Label">
                                                    <b>Email </b>:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                <input name="txtEmail" type="text" id="txtEmail" size="30"
                                                  onChange={handleChange} placeholder="மின்னஞ்சல்" class="TextBox"/>
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
                                                                        onChange={handleChange}  class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Dasa</b> &nbsp;&nbsp;<input name="txtDasaYears" type="text" id="txtDasaYears" 
                                                                        onChange={handleChange} class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Year(s) </b>&nbsp;&nbsp;<input name="txtDasaMonths" type="text" id="txtDasaMonths" 
                                                                        onChange={handleChange}  class="TextBox" /> &nbsp;&nbsp;
                                                                    <b>Month(s)</b> &nbsp;&nbsp;<input name="txtDasaDays" type="text" id="txtDasaDays" 
                                                                        onChange={handleChange} class="TextBox" /> &nbsp;&nbsp;
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
                                                                                            <select name="ddlHoro12" id="ddlHoro12" class="TextBox_WhiteBorder" 
                                                                                                 onChange={handleHoroscope12Change}><option align="center">-12-</option><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro1" id="ddlHoro1" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope1Change} ><option align="center">-1-</option><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro2" id="ddlHoro2" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope2Change}><option align="center">-2-</option><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro3" id="ddlHoro3" class="TextBox_WhiteBorder"
                                                                                                onChange={handleHoroscope3Change} ><option align="center">-3-</option><Raasi/></select>
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
                                                                                                        <select name="ddlHoro11" id="ddlHoro11" class="TextBox_WhiteBorder"
                                                                                                        onChange={handleHoroscope11Change} ><option  align="center">-11-</option><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px">
                                                                                                        <select name="ddlHoro10" id="ddlHoro10" class="TextBox_WhiteBorder"
                                                                                                            onChange={handleHoroscope10Change}><option align="center">-10-</option><Raasi/></select>
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
                                                                                                        <select name="ddlHoro4" id="ddlHoro4" class="TextBox_WhiteBorder" 
                                                                                                            onChange={handleHoroscope4Change}><option align="center">-4-</option><Raasi/></select>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <select name="ddlHoro5" id="ddlHoro5" class="TextBox_WhiteBorder"
                                                                                                            onChange={handleHoroscope5Change} ><option align="center">-5-</option><Raasi/></select>
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
                                                                                                onChange={handleHoroscope9Change}><option align="center">-9-</option><Raasi/></select>
                                                                                            
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro10" id="ddlHoro10" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope8Change} ><option align="center">-8-</option><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro7" id="ddlHoro7" class="TextBox_WhiteBorder"
                                                                                                onChange={handleHoroscope7Change} ><option  align="center">-7-</option><Raasi/></select>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <select name="ddlHoro6" id="ddlHoro6" class="TextBox_WhiteBorder" 
                                                                                                onChange={handleHoroscope6Change}><option align="center">-6-</option><Raasi/></select>
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
                                                                                            <textarea name="txtHoro12" rows="2" cols="10" id="txtHoro12" 
                                                                                            value={txtHoro12} class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro1"  id="txtHoro1"
                                                                                                value={txtHoro1}  rows="2" cols="10"  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro2" id="txtHoro2"
                                                                                                value={txtHoro2} rows="2" cols="10"  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro3" id="txtHoro3"
                                                                                                value={txtHoro3}   rows="2" cols="10" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                        <textarea name="txtHoro11" 
                                                                                                            value={txtHoro11} rows="2" cols="10" id="txtHoro11" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px">
                                                                                                        <textarea name="txtHoro10" 
                                                                                                            value={txtHoro10} rows="2" cols="10" id="txtHoro10" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p align="center">
                                                                                                <b><font face="Arial" size="3" color="#008000">RASI - ராசி</font></b>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtHoro4"  
                                                                                                            value={txtHoro4} rows="2" cols="10" id="txtHoro4" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtHoro5" 
                                                                                                            value={txtHoro5} rows="2" cols="10" id="txtHoro5" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                            <textarea name="txtHoro8" 
                                                                                            value={txtHoro8} rows="2" cols="10" id="txtHoro8" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro7" 
                                                                                               value={txtHoro7} rows="2" cols="10" id="txtHoro7" class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtHoro6"
                                                                                                value={txtHoro6} rows="2" cols="10" id="txtHoro6" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                            <textarea name="txtAmsam12"id="txtAmsam12" rows="2" placeholder="12" cols="10"  
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <textarea name="txtAmsam1" id="txtAmsam1" placeholder="1" rows="2" cols="10" 
                                                                                            onChange={handleChange} class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam2" placeholder="2" rows="2" cols="10" id="txtAmsam2" 
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam3" placeholder="3" rows="2" cols="10" id="txtAmsam3" 
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                        <textarea name="txtAmsam11" rows="2" cols="10" id="txtAmsam11" 
                                                                                                        onChange={handleChange} placeholder="11" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam10" rows="2" cols="10" id="txtAmsam10" 
                                                                                                        onChange={handleChange} placeholder="10" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p align="center">
                                                                                                <b><font face="Arial" size="3" color="#008000">AMSAM - நட்சத்திரம் </font></b>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td width="100px">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam4" rows="2" cols="10" id="txtAmsam4"
                                                                                                        onChange={handleChange} placeholder="4" class="TextBox_WhiteBorder" ></textarea>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td width="100px" >
                                                                                                        <textarea name="txtAmsam5" rows="2" cols="10" id="txtAmsam5"
                                                                                                        onChange={handleChange} placeholder="5" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                            <textarea name="txtAmsam9" placeholder="9" rows="2" cols="10" id="txtAmsam9" 
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam8" placeholder="8" rows="2" cols="10" id="txtAmsam8" 
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam7" placeholder="7" rows="2" cols="10" id="txtAmsam7" 
                                                                                            onChange={handleChange}  class="TextBox_WhiteBorder" ></textarea>
                                                                                        </td>
                                                                                        <td width="100px" >
                                                                                            <textarea name="txtAmsam6" placeholder="6" rows="2" cols="10" id="txtAmsam6" 
                                                                                                onChange={handleChange} 
                                                                                             class="TextBox_WhiteBorder" ></textarea>
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
                            <select
                                className="form-input"
                                name="ddlExpEducation"
                                id="ddlExpEducation"
                                class="TextBox"
                                onChange={handleChange}
                                >
                                    <option value="0-பட்டபடிப்பு">பட்டபடிப்பு</option>
                                    <option value="1-PHD DOCTOR">PHD DOCTOR</option>
                                    <option value="2-MASTER DEGREE">MASTER DEGREE</option>
                                    <option value="3-BACHELOR DEGREE">BACHELOR DEGREE</option>
                                    <option value="4-DIPLAMA">DIPLAMA</option>
                                    <option value="5-ITI">ITI</option>
                                    <option value="6-HSC">+2 - HSC</option>
                                    <option value="7-SSLC">10 - SSLC</option>
                                </select>
                                <input name="txtExpQualification" type="text" id="txtExpQualification" 
                                placeholder="கல்வி தகுதி"
                                onChange={handleChange}  class="TextBox" />
                            </td>
                            <td align="right" class="Label">
                                <b>Job</b> :
                            </td>
                            <td align="left">
                                <input name="txtExpJob" type="text" id="txtExpJob" 
                                placeholder="வேலை" onChange={handleChange}  class="TextBox" />
                            </td>
                            <td align="left" class="Label">
                                <b>Job Going </b>:
                            </td>
                            <td align="left">
                                <select name="ddlExpJob" id="ddlExpJob" onChange={handleChange} >  
                                    <option value="0-பதிலில்லை">வேலை கட்டாயமா?</option>
                                    <option value="1-Must">Must-கட்டாயம்</option>
                                    <option value="2-Optional">Optional-பரவாயில்லை</option>
                                    <option value="3-Required">Not required-வேண்டாம்</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Income Per Month </b>:
                            </td>
                            <td >
                                <input name="txtExpIncome" type="text" id="txtExpIncome" 
                                placeholder="மாத வருமானம்" class="TextBox" onChange={handleChange} />
                            </td>
                            <td  align="right">
                                <b>Preferred Age </b>:
                            </td>
                            <td align="left" class="Label">
                                <select name="ddlPreferredAgeFrom" id="ddlPreferredAgeFrom" class="dd_NoWidth" onChange={handleChange}>
                                    <option value="0-Select வயது முதல்">Select - வயது முதல்</option>
                                    <option value="1-19">19</option>
                                    <option value="2-20">20</option>
                                    <option value="3-21">21</option>
                                    <option value="4-22">22</option>
                                    <option value="5-23">23</option>
                                    <option value="6-24">24</option>
                                    <option value="7-25">25</option>
                                    <option value="8-26">26</option>
                                    <option value="9-27">27</option>
                                    <option value="10-28">28</option>
                                    <option value="11-29">29</option>
                                    <option value="12-30">30</option>
                                    <option value="13-31">31</option>
                                    <option value="14-32">32</option>
                                    <option value="15-33">33</option>
                                    <option value="16-34">34</option>
                                    <option value="17-35">35</option>
                                    <option value="18-36">36</option>
                                    <option value="19-37">37</option>
                                    <option value="20-38">38</option>
                                    <option value="21-39">39</option>
                                    <option value="22-40">40</option>
                                    <option value="23-41">41</option>
                                    <option value="24-42">42</option>
                                    <option value="25-43">43</option>
                                    <option value="26-44">44</option>
                                    <option value="27-45">45</option>
                                    <option value="28-46">46</option>
                                    <option value="29-47">47</option>
                                    <option value="30-48">48</option>
                                    <option value="31-49">49</option>
                                    <option value="32-50">50</option>
                                </select>
                                    To
                                <select name="ddlPreferredAgeTo" id="ddlPreferredAgeTo" class="dd_NoWidth" onChange={handleChange}>
                                        <option value="0-வயது வரை">Select - வயது வரை</option>
                                        <option value="1-19">19</option>
                                        <option value="2-20">20</option>
                                        <option value="3-21">21</option>
                                        <option value="4-22">22</option>
                                        <option value="5-23">23</option>
                                        <option value="6-24">24</option>
                                        <option value="7-25">25</option>
                                        <option value="8-26">26</option>
                                        <option value="9-27">27</option>
                                        <option value="10-28">28</option>
                                        <option value="11-29">29</option>
                                        <option value="12-30">30</option>
                                        <option value="13-31">31</option>
                                        <option value="14-32">32</option>
                                        <option value="15-33">33</option>
                                        <option value="16-34">34</option>
                                        <option value="17-35">35</option>
                                        <option value="18-36">36</option>
                                        <option value="19-37">37</option>
                                        <option value="20-38">38</option>
                                        <option value="21-39">39</option>
                                        <option value="22-40">40</option>
                                        <option value="23-41">41</option>
                                        <option value="24-42">42</option>
                                        <option value="25-43">43</option>
                                        <option value="26-44">44</option>
                                        <option value="27-45">45</option>
                                        <option value="28-46">46</option>
                                        <option value="29-47">47</option>
                                        <option value="30-48">48</option>
                                        <option value="31-49">49</option>
                                        <option value="32-50">50</option>
                                      </select>
                                </td>
                                <td>
                                    <b>Preferred Job Location</b>
                                </td>
                                <td>
                                    <input name="txtExpPlaceOfJob" type="text" id="txtExpPlaceOfJob" 
                                    placeholder="வேலை பார்க்கும் இடம்" class="TextBox" onChange={handleChange} />
                                </td>
                            </tr>
                            <td align="left">
                                <b>Diet</b> :
                            </td>
                            <td align="left">
                                 <select name="ddlExpDiet" id="ddlExpDiet" onChange={handleChange}>
                                    <option value="0-உணவு பிரிவு">உணவு பிரிவு</option>
                                    <option value="1-Vegetarian">Vegetarian</option>
                                    <option value="2-NonVegetarian">Non-Vegetarian</option>
                                    <option value="3-Eggetarian">Eggetarian</option>
                                    <option value="4-Doesn't Matter">Doesn't Matter</option>
                                </select>
                            </td>
                            <td align="right">
                            <b>Horoscope Required </b>:
                            </td>
                            <td align="left" class="Label">
                                <select name="ddlExpHoroscope" id="ddlExpHoroscope" onChange={handleChange}>
                                <option value="0-ஜாதகம் கட்டாயமா">ஜாதகம் கட்டாயமா</option>
                                <option value="1-Yes">Yes</option>
                                <option value="2-No">No</option>
                                </select>    
                            </td>
                            <td align="left">
                                <b>Marital Status </b>:
                            </td>
                            <td align="left" class="Label">
                                    <select name="ddlExpMartialStatus" id="ddlExpMartialStatus" onChange={handleChange}>
                                        <option value="0-திருமணம் குறித்து">திருமணம் குறித்து</option>
                                        <option value="1-Unmarried">Unmarried</option>
                                        <option value="2-Married">Married</option>
                                        <option value="3-Widow">Widow/Widower</option>
                                        <option value="4-Divorce">Divorce</option>
                                        <option value="5-Doesnot_Matter">Doesnt Matter</option>
                                    </select>
                            </td>
                        <tr>
                            <td>
                                <b>Caste </b>:
                            </td>
                            <td align="left">
                                <select name="ddlExpCaste"  id="ddlExpCaste" class="dd_NoWidth" onChange={handleChange}>
                                <option selected="selected" value="0-Select ஜாதி">Select - ஜாதி</option>
                                <option value="1-Any">Any</option>
                                <option value="2-Naidu">Naidu</option>
                                <option value="2-Nayudu">Nayudu</option>
                                <option value="3-Vanniyar">Vanniyar</option>
                                <option value="4-Chettiyar">Chettiyar</option>
                                <option value="5-Mudhalaiyar">Mudhalaiyar</option>
                                <option value="6-Gounder">Gounder</option>
                                <option value="7-Brahmin">Brahmin</option>
                                <option value="8-Devar">Devar</option>
                                <option value="9-Others">Others</option>
                                </select>
                            </td>
                            <td  align="right">
                                <b>Sub Caste</b> :
                            </td>
                            <td align="left">
                                    <select name="ddlExpSubCaste" id="ddlExpSubCaste" class="dd_NoWidth" onChange={handleChange}>
                                    <option selected="selected" value="0-select உட்பிரிவு">select - உட்பிரிவு</option>
                                    <option value="1-Any">Any</option>
                                    <option value="2-Others">Others</option>
                                    </select>                                                        
                            </td>
                            <td align="left">
                            </td>
                        </tr>
                        <tr><td>&nbsp;&nbsp;</td></tr>
                        <tr>
                            <td colSpan={2}>
                                <b>Any other Comments - இதர விபரங்கள் </b>
                             </td>
                             <td align="right" class="Label">
                             :
                             </td>
                             <td align="left" valign="middle" colSpan={1}>
                                <textarea name="txtOtherComments" rows="4" cols="40" onChange={handleChange}
                                    id="txtOtherComments" class="TextBox"></textarea>
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
                            <label htmlFor="txtAmount" className="font-size-13">
                            <b>Amount</b>
                            </label>
                            <input
                            type="input"
                            className="form-input"
                            name="txtAmount"
                            id="txtAmount"
                            value="1000"
                            onChange={handleChange}
                            />
                        </div>
                        
                        <div className="col-2">
                            <label htmlFor="txtTransactionDate" className="font-size-13">
                            <b>Amount Paid Date</b>
                            </label>
                            <input
                                type="date"
                                className="form-input"
                                name="txtTransactionDate"
                                id="txtTransactionDate"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Mode Of Payment</b>
                            </label>
                            <select
                                className="form-input"
                                name="ddlModeOfPayment"
                                id="ddlModeOfPayment"
                                onChange={handleChange}
                                >
                            <option value="0-பணம் செலுத்தும் முறை">பணம் செலுத்தும் முறை</option>
                            <option value="1-Cash">CASH</option>
                            <option value="2-Cheque">CHEQUE</option>
                            <option value="3-Google Pay">GOOGLE PAY</option>
                            <option value="4-Phone Pay">Phone Pe</option>
                            <option value="5-Bharat Pay">Phone Pe</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Reference</b>
                            </label>
                            <input
                            type="input"
                            className="form-input"
                            name="txtReference"
                            id="txtReference"
                            placeholder="குறிப்பு"
                            onChange={handleChange}
                            />
                        </div>
                        <div className="col-2">
                            <label htmlFor="" className="font-size-13">
                            <b>Scheme</b>
                            </label>
                            <select name="ddlScheme" id="ddlScheme" className="form-input" onChange={handleChange}>
                                <option value="0-Scheme" selected>Scheme</option>
                                <option value="1-Normal">Normal</option>
                                <option value="2-Premium">Premium</option>
                            </select>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit" value="Register Varan">
                            {isUpdate ? "UPDATE":"SUBMIT (Register Varan)"}
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

export default RegisterVaran;