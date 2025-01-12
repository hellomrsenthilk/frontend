import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Raasi from "./subcomponent/Raasi";
import axios from 'axios';


const UpdateVaran = () => {
    const [isUpdate, setIsUpdating] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const {id} = useParams();
    
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

    const [formVarans, setFormVarans] = useState({
            name: "",
            sex: "",
            dob: "",
            dobStr: "",
            timeOfBirth: "00",
            minOfBirth: "00",
            secOfBirth: "AM",
            placeOfBirth: "",
            nativity: "",
            motherTongue: "",
            motherTongueStr: "",
            maritialStatus: "",
            maritialStatusStr: "",
            fatherName: "",
            fatherAlive: "",
            fatherJob: "",
            motherName: "",
            motherAlive: "",
            motherJob: "",
            marriedElderBrothers: "0",
            marriedYoungerBrothers: "0",
            marriedElderSisters: "0",
            marriedYoungerSisters: "0",
            unMarriedElderBrothers: "0",
            unMarriedYoungerBrothers: "0",
            unMarriedElderSisters: "0",
            unMarriedYoungerSisters: "0",
            residentialType : "",
            residentialTypeStr : "",
            vehicleOwned : "",
            vehicleOwnedStr : "",
            otherDetails: "",
            height: "50",
            weight: "50",
            bloodGroup: "",
            bloodGroupStr: "",
            diet: "",
            complexion: "", 
            physicalStatus: "",
            education: "",
            educationStr: "",
            qualification: "",
            job: "",
            placeOfJob: "",
            income: "1000",
            office: "",
            caste: "",
            casteStr: "",
            subCaste: "",
            gothram: "",
            star: "",
            starTamil: "",
            raasi: "",
            raasiTamil: "",
            laknamNo: "",
            laknam: "",
            laknamStr:"",
            laknamTamil:"",
            permanentAddress: "",
            presentAddress: "",
            landLineNumbers: "",
            contactPerson: "",
            mobileNo: "",
            email: "",
            dasa: "",
            dasaYears: "",
            dasaMonths: "",
            dasaDays: "",
            horo1: "",
            horo2: "",
            horo3: "",
            horo4: "",
            horo5: "",
            horo6: "",
            horo7: "",
            horo8: "",
            horo9: "",
            horo10: "",
            horo11: "",
            horo12: "",
            amsam1: "",
            amsam2: "",
            amsam3: "",
            amsam4: "",
            amsam5: "",
            amsam6: "",
            amsam7: "",
            amsam8: "",
            amsam9: "",
            amsam10: "",
            amsam11: "",
            amsam12: "",
            expEducation: "",
            expEducationStr: "",
            expQualification: "",
            expPlaceOfJob: "",
            expIncome: "1000",
            expJob:"",
            expJobMust:"",
            preferredAgeFrom: "20",
            preferredAgeTo: "35",
            expCaste: "",
            expCasteStr: "",
            expSubCaste: "",
            otherComments: "",
            expDiet : "",
            expDietStr : "",
            expHoroscope : "",
            expHoroscopeStr : "",
            expMartialStatus: "",
            expMartialStatusStr: "",
            scheme: "1",
            amount: "1000",
            transactionDate: "",
            modeOfPayment: "",
            reference: "",
            file1:"",
            file2:"",
            photo1:"",
            phone2:""
    });
    

    useEffect( () => {
        axios.get("http://localhost:8089/viewVaran/"+id)
            .then(res => {
               setFormVarans({...formVarans, name: res.data[0].name, sex: res.data[0].sex, dob: res.data[0].dob, dobString: res.data[0].dobString,
                    timeOfBirth: res.data[0].timeOfBirth, minOfBirth: res.data[0].minOfBirth, secOfBirth: res.data[0].secOfBirth,
                    placeOfBirth: res.data[0].placeOfBirth, nativity: res.data[0].nativity, motherTongue: res.data[0].motherTongue, motherTongueStr: res.data[0].motherTongueStr,
                    maritialStatus: res.data[0].maritialStatus, maritialStatusStr: res.data[0].maritialStatusStr, fatherName: res.data[0].fatherName, fatherAlive: res.data[0].fatherAlive,
                    fatherJob: res.data[0].fatherJob, motherName: res.data[0].motherName, motherAlive: res.data[0].motherAlive, motherJob: res.data[0].motherJob,
                    marriedElderBrothers: res.data[0].marriedElderBrothers, marriedYoungerBrothers: res.data[0].marriedYoungerBrothers,
                    marriedElderSisters: res.data[0].marriedElderSisters, marriedYoungerSisters: res.data[0].marriedYoungerSisters, unMarriedElderBrothers: res.data[0].unMarriedElderBrothers,
                    unMarriedYoungerBrothers: res.data[0].unMarriedYoungerBrothers, unMarriedElderSisters: res.data[0].unMarriedElderSisters,
                    unMarriedYoungerSisters: res.data[0].unMarriedYoungerSisters, residentialType: res.data[0].residentialType, residentialTypeStr: res.data[0].residentialTypeStr, vehicleOwned: res.data[0].vehicleOwned, vehicleOwnedStr: 
                    res.data[0].vehicleOwnedStr, otherDetails: res.data[0].otherDetails, height: res.data[0].height, weight: res.data[0].weight, bloodGroup: res.data[0].bloodGroup, bloodGroupStr: res.data[0].bloodGroupStr, diet: res.data[0].diet,
                    complexion: res.data[0].complexion, physicalStatus: res.data[0].physicalStatus, education: res.data[0].education, educationStr: res.data[0].educationStr, qualification: res.data[0].qualification, job: res.data[0].job,
                    placeOfJob: res.data[0].placeOfJob, income: res.data[0].income, caste: res.data[0].caste, casteStr: res.data[0].casteStr, subCaste: res.data[0].subCaste, gothram: res.data[0].gothram,
                    star: res.data[0].star, starTamil: res.data[0].starTamil, raasi: res.data[0].raasi, raasiTamil: res.data[0].raasiTamil, laknamNo: res.data[0].laknamNo, laknam : res.data[0].laknam, laknamTamil : res.data[0].laknamTamil, laknamStr : res.data[0].laknamStr, permanentAddress: res.data[0].permanentAddress,
                    presentAddress : res.data[0].presentAddress , landLineNumbers: res.data[0].landLineNumbers, contactPerson : res.data[0].contactPerson , mobileNo: res.data[0].mobileNo,
                    email: res.data[0].email, dasa: res.data[0].dasa, dasaYears: res.data[0].dasaYears, dasaMonths: res.data[0].dasaMonths, dasaDays: res.data[0].dasaDays,
                    horo1: res.data[0].horo1, horo2: res.data[0].horo2, horo3: res.data[0].horo3, horo4: res.data[0].horo4, horo5: res.data[0].horo5, horo6: res.data[0].horo6, horo7: res.data[0].horo7,
                    horo8: res.data[0].horo8, horo9: res.data[0].horo9, horo10: res.data[0].horo10, horo11: res.data[0].horo11, horo12: res.data[0].horo12, amsam1: res.data[0].amsam1, amsam2: res.data[0].amsam2,
                    amsam3: res.data[0].amsam3, amsam4: res.data[0].amsam4, amsam5: res.data[0].amsam5, amsam6: res.data[0].amsam6, amsam7: res.data[0].amsam7, amsam8: res.data[0].amsam8, amsam9: res.data[0].amsam9,
                    amsam10: res.data[0].amsam10, amsam11: res.data[0].amsam11, amsam12: res.data[0].amsam12, expEducation: res.data[0].expEducation, expEducationStr: res.data[0].expEducationStr,  expQualification: res.data[0].expQualification, expPlaceOfJob: res.data[0].expPlaceOfJob,
                    expJob: res.data[0].expJob, expJobMust: res.data[0].expJobMust, expJobMustStr: res.data[0].expJobMustStr, expIncome: res.data[0].expIncome, preferredAgeFrom: res.data[0].preferredAgeFrom, preferredAgeTo: res.data[0].preferredAgeTo, expCaste: res.data[0].expCaste, expCasteStr: res.data[0].expCasteStr,
                    expSubCaste: res.data[0].expSubCaste, expMartialStatus: res.data[0].expMartialStatus, expMartialStatusStr: res.data[0].expMartialStatusStr, expDiet: res.data[0].expDiet, expDietStr: res.data[0].expDietStr, expHoroscope: res.data[0].expHoroscope, expHoroscopeStr: res.data[0].expHoroscopeStr, otherComments: res.data[0].otherComments, photo1: res.data[0].photo1, photo2: res.data[0].photo2,
                    file1 : res.data[0].file1, file2 : res.data[0].file2, scheme: res.data[0].scheme, username: res.data[0].username, password: res.data[0].password, amount: res.data[0].amount, dobStr: res.data[0].dobStr, 
                    transactionDate: res.data[0].transactionDate, modeOfPayment: res.data[0].modeOfPayment , transactionReference: res.data[0].transactionReference, isMarried: res.data[0].isMarried, isDeleted: res.data[0].isDeleted,
                    createdBy: res.data[0].createdBy, createdOn: res.data[0].createdOn, updatedBy: res.data[0].updatedBy, updatedOn: res.data[0].updatedOn   
                 });
                 console.log("formVaran1");
                 console.log(formVarans);
            })
            .catch(err => console.log(err));
    }, []);

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
                        <h4 className="m-0"><b>UPDATE VARAN -</b> மணமகள், மணமகன் விபரம் சரிபார்ப்பு</h4>
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
                                value={formVarans.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13">
                                 <b>Sex</b>
                                </label><br/>
                                <select name="ddlSex" id="ddlSex" class="dd_NoWidth" 
                                     className="font-size-13"  onChange={handleChange}>
                                    <option value="">பாலினம்</option>
                                    <option value="male">Male - ஆண்</option>
                                    <option value="female">Female - பெண்</option>
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
                                value={formVarans.dobStr}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-15">
                                <b>Time of Birth - பிறந்த நேரம்</b>
                                </label> <br/>
                                <select name="ddlTimeOfBirth" id="ddlTimeOfBirth" class="dd_NoWidth"
                                   onChange={handleChange}>
                                <option value="Hr" selected="selected">HR</option>
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
                        <select name="ddlMinOfBirth" id="ddlMinOfBirth" class="dd_NoWidth"
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
                        <select name="ddlSecOfBirth" id="ddlSecOfBirth" class="dd_NoWidth"
                             onChange={handleChange}>
                        <option value="0" selected>காலம்</option>
                        <option value="AM">AM - காலை</option>
                        <option value="PM">PM - மாலை</option>
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
                                value={formVarans.placeOfBirth}
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
                                value={formVarans.nativity}
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
                                onChange={handleChange}
                                >
                                    <option value="0-0" selected="selected">தாய் மொழி</option>
                                    <option value="1-Tamil" >Tamil - தமிழ்</option>
                                    <option value="2-Telugu" >Telugu - தெலுங்கு</option>
                                    <option value="3-Malayalam" >Malayalam - மலையாளம்</option>
                                    <option value="4-Kannada" >Kannada - கன்னடம்</option>

                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="" className="font-size-13"/>
                                <b>Marital status </b><br/>
                                <select name="ddlMaritialStatus" id="ddlMaritialStatus" class="dd_NoWidth" 
                                     onChange={handleChange}>
                                    <option value="0-0" selected="selected">திருமண தகுதி நிலை</option>
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
                                    <option value="" selected="selected">தந்தை நிலை குறித்து</option>
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
                                    <option value="" selected="selected">தாயார் நிலை குறித்து</option>
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
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedYoungerBrothers" id="ddlMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder" 
                                         onChange={handleChange}>
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
                                 </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedElderSisters" id="ddlMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                         onChange={handleChange}>
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlMarriedYoungerSisters" id="ddlMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                         onChange={handleChange} >
                                        <option value="0" selected>நபர்கள்</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 and above</option>
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
                                        <option value="0" selected>நபர்கள்</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedYoungerBrothers" id="ddlUnMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder"
                                      onChange={handleChange}>
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedElderSisters" id="ddlUnMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                      onChange={handleChange}>
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
                                </select>
                                </td>
                                <td>
                                    <select name="ddlUnMarriedYoungerSisters" id="ddlUnMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                       onChange={handleChange}>
                                    <option value="0" selected>நபர்கள்</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 and above</option>
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
                                            <option value="0-Not Specified">தங்கும் வசதி</option>
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
                                            <option value="0-No Vehicle">வாகன வசதி இல்லை</option>
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
                                    <option value="1">உயரம் -ft-</option>
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
                                <td>
                                    <b> Weight </b>: &nbsp;&nbsp;
                                </td>
                                <td align="left">
                                    <select name="ddlWeight" id="ddlWeight" class="dd_NoWidth"
                                        onChange={handleChange}>
                                    <option value="0"> எடை - Kgs -</option>
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
                                <td align="right" class="Label">
                                        <b>Blood Group</b> : &nbsp;
                                </td>
                                <td  align="left">
                                    <select name="ddlBloodGroup" id="ddlBloodGroup" class="dd_NoWidth"
                                        onChange={handleChange}>
                                    <option value="0-0">-Select- குருதி வகை</option>
                                    <option value="1-O+">O+</option>
                                    <option value="2-A+">A+</option>
                                    <option value="3-B+">B+</option>
                                    <option value="4-AB+">AB+</option>
                                    <option value="5-O-">O-</option>
                                    <option value="6-A-">A-</option>
                                    <option value="7-B-">B-</option>
                                    <option value="8-AB-">AB-</option>
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
                                            <option value="0-0" selected="selected">உணவு விபரம்</option>
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
                                            <option value="0-0" selected="selected">ஊனம்</option>
                                            <option value="1-Normal" checked="checked" >No-இல்லை</option>
                                            <option  value="2-PhysicallyChallenged" >Yes-ஆம்</option>    
                                            <option  value="3-EyeBlindness" >EyeBlindness -பார்வை குறை</option>       
                                            <option  value="4-Deaf" >Deaf -காது கேளாமை</option> 
                                            <option  value="5-Dump" >Dump -பேச்சு குறைப்பாடு</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                        </select>    
                                    </td>
                                    <td align="left" class="Label">
                                        <b>Complexion</b> : &nbsp;
                                    </td>
                                    <td align="left">
                                        <select name="ddlComplexion" id="ddlComplexion" onChange={handleChange}>
                                            <option value="0-0">-Select- உடல் நிறம்</option>
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
                                                <option value="0">அலுவலகம்</option>
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
                                            <option selected="selected" value="0-0">Select - ஜாதி</option>
                                            <option value="1-Any">Any</option>
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
                                        <option value="0-0">-- Select Star --</option>
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
                                            <option value="0-0">-- Select Rasi --</option>
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
                                                        onChange={handleChange}>
                                                    <option value="0-0">-Select Laknam --</option>
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
                                    <option value="0">Select - வயது முதல்</option>
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
                                </select>
                                    To
                                <select name="ddlPreferredAgeTo" id="ddlPreferredAgeTo" class="dd_NoWidth" onChange={handleChange}>
                                        <option value="0">Select - வயது வரை</option>
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
                                    <option value="0-NoAnswer">உணவு பிரிவு</option>
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
                                <option value="0-No_Answer">ஜாதகம் கட்டாயமா</option>
                                <option value="1-Yes">Yes</option>
                                <option value="2-No">No</option>
                                </select>    
                            </td>
                            <td align="left">
                                <b>Marital Status </b>:
                            </td>
                            <td align="left" class="Label">
                                    <select name="ddlExpMartialStatus" id="ddlExpMartialStatus" onChange={handleChange}>
                                        <option value="0-0">திருமணம் குறித்து</option>
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
                                <option selected="selected" value="0-0">Select - ஜாதி</option>
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
                                    <option selected="selected" value="0">select - உட்பிரிவு</option>
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
                            <option value="">பணம் செலுத்தும் முறை</option>
                            <option value="cash">CASH</option>
                            <option value="cheque">CHEQUE</option>
                            <option value="Google Pay">GOOGLE PAY</option>
                            <option value="Phone Pay">Phone Pe</option>
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