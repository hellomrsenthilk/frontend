import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const SearchVaran = () => {

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormVaran({ ...formVaran, [name]: value });
        setFormSearch({ ...formSearch, [name]: value });
      };
    
    useEffect( () => {
        axios.get("http://localhost:8089/viewVaran/1")
            .then(res => {
                setFormVaran({...formVaran, name: res.data[0].name, sex: res.data[0].sex, dob: res.data[0].dob, dobString: res.data[0].dobString,
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
                console.log(formVaran);
        })
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (e) => {
        console.log("****handleSearch****");
        console.log(formSearch);
        axios.post("http://localhost:8089/searchVaran?"+formSearch, formSearch)
        .then(res => {
            console.log("console");
            console.log("result = " + res.data);
            setData(res.data)
        })
        console.log(data);
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
    
    const [formSearch, setFormSearch] = useState({
        ddlExpSex: "",
        ddlExpStar: "",
        ddlExpRaasiSign: "",
        txtExpQualification: "",
        ddlExpEducation: "",
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
    })
      

    return (
        <div >
            <div>
                 <Navbar/>
                 <div className="container-fluid rounded-div" >
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="card">
                                <div style={{backgroundColor: "gold"}} className="card-header rounded-div">
                                    <h4 style={{color : "red"}}> Search Varan - வரன் தேடுதல் </h4>
                                </div>
                                <div className="card-body" id="varan">                    
                                    <table border={0}>
                                        <tr><td colSpan={4}></td></tr>
                                        <tr>
                                            <td>
                                            <b> Sex - பாலினம் </b>
                                            </td>
                                            <td>
                                                <select name="ddlExpSex" id="ddlExpSex" class="form-input" 
                                                    className="font-size-14"  onChange={handleChange}>
                                                    <option value="" selected="selected" >பாலினம்</option>
                                                    <option value="male" >Male - ஆண்</option>
                                                    <option value="female">Female - பெண்</option>
                                                </select>
                                            </td>
                                            <td>
                                                <b>Star</b> : &nbsp;&nbsp;
                                            </td>
                                            <td>
                                            <select name="ddlExpStar" id="ddlExpStar" class="dd_NoWidth"
                                                onChange={handleChange}>
                                                <option value="0">-- Select Star --</option>
                                                <option value="1">ASWINI-அசுவினி</option>
                                                <option value="2">BARANI-பரணி</option>
                                                <option value="3">KRITHIGAI-கிருத்திகை</option>
                                                <option value="4">ROHINI-ரோகிணி</option>
                                                <option value="5">MIRUGASIRI-மிருகசீரிடம்</option>
                                                <option value="6">THIRUVADI-திருவாதிரை </option>
                                                <option value="7">PUNARPOOSAM-புனர்பூசம் </option>
                                                <option value="8">POOSAM-பூசம்</option> 
                                                <option value="9">AYILYAM-ஆயில்யம்</option> 
                                                <option value="10">MAGAM-மகம்</option> 
                                                <option value="11">POORAM-பூரம் </option>
                                                <option value="12">UTHIRAM-உத்திரம் </option>
                                                <option value="13">ASTHAM-அஸ்தம் </option>
                                                <option value="14">CHITRAI-சித்திரை</option>
                                                <option value="15">SWATHI-சுவாதி</option>
                                                <option value="16">VISAGAM-விசாகம்</option>
                                                <option value="17">ANUSHAM-அனுஷம்</option>
                                                <option value="18">KETTAI-கேட்டை </option>
                                                <option value="19">MOOLAM-மூலம் </option>
                                                <option value="20">POORADAM-பூராடம் </option>
                                                <option value="21">UTHIRADAM-உத்திராடம் </option>
                                                <option value="22">THIRUVON-திருவோணம்</option>
                                                <option value="23">AVITTAM-அவிட்டம் </option>
                                                <option value="24">SADAYAM-சதயம்</option>	
                                                <option value="25">POORATTA-பூரட்டாதி</option>
                                                <option value="26">UTTHIRA-உத்திரட்டாதி</option>
                                                <option value="27">REVATHI-ரேவதி</option>
                                                </select>
                                            </td>
                                            <td>
                                                <b>Raasi/Moon Sign </b>: &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <select name="ddlExpRaasiSign" id="ddlExpRaasiSign" class="dd_NoWidth"
                                                onChange={handleChange}>
                                                    <option value="0">-- Select Rasi --</option>
                                                    <option value="1">MESHAM-மேஷம்</option>
                                                    <option value="2">RISHABAM-ரிஷபம்</option>
                                                    <option value="3">MITHUNAM-மிதுனம்</option>
                                                    <option value="4">KATAKAM-கடகம்</option>
                                                    <option value="5">SIMMAM-சிம்மம்</option>
                                                    <option value="6">KANNI-கன்னி</option>
                                                    <option value="7">THULAM-துலாம்</option>
                                                    <option value="8">VRICHIKA-விருச்சி</option>
                                                    <option value="9">DHANUSU-தனுஷ்</option>
                                                    <option value="10">MAGARAM-மகரம்</option>
                                                    <option value="11">KUMBHAM-கும்பம்</option>
                                                    <option value="12">MEENAM-மீனம்</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr><td colSpan={3}>&nbsp;</td></tr>
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
                                                    <option value="0">பட்டபடிப்பு</option>
                                                    <option value="1">PHD DOCTOR</option>
                                                    <option value="2">MASTER DEGREE</option>
                                                    <option value="3">BACHELOR DEGREE</option>
                                                    <option value="4">DIPLAMA</option>
                                                    <option value="5">ITI</option>
                                                    <option value="6">+2 - HSC</option>
                                                    <option value="7">10 - SSLC</option>
                                                </select>
                                                <input name="txtExpQualification" type="text" 
                                                id="txtExpQualification" size={15} 
                                                placeholder="கல்வி தகுதி"
                                                onChange={handleChange}  class="TextBox" />
                                            </td>
                                            <td align="left" class="Label">
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
                                                    <option value="0">கட்டாயமா?</option>
                                                    <option value="1">Must-கட்டாயம்</option>
                                                    <option value="2">Optional-பரவாயி</option>
                                                    <option value="3">Not required-வேண்ட</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Income Monthly </b>:
                                            </td>
                                            <td >
                                                <input name="txtExpIncome" type="text" id="txtExpIncome" 
                                                placeholder="மாத வருமானம்" class="TextBox" onChange={handleChange} />
                                            </td>
                                            <td  align="left">
                                                <b>Preferred Age </b>:
                                            </td>
                                            <td align="left" class="Label">
                                                <select name="ddlPreferredAgeFrom" id="ddlPreferredAgeFrom" class="dd_NoWidth" onChange={handleChange}>
                                                    <option value="0">முதல்</option>
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
                                                    &nbsp; To &nbsp;
                                                <select name="ddlPreferredAgeTo" id="ddlPreferredAgeTo" class="dd_NoWidth" onChange={handleChange}>
                                                        <option value="0">வரை</option>
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
                                            <tr><td colSpan={3}>&nbsp;</td></tr>
                                            <td align="left">
                                                <b>Diet</b> :
                                            </td>
                                            <td align="left">
                                                <select name="ddlExpDiet" id="ddlExpDiet" onChange={handleChange}>
                                                    <option value="0">உணவு பிரிவு</option>
                                                    <option value="1">Vegetarian</option>
                                                    <option value="2">Non-Vegetarian</option>
                                                    <option value="3">Eggetarian</option>
                                                    <option value="4">Doesn't Matter</option>
                                                </select>
                                            </td>
                                            <td align="left">
                                            <b>Horoscope Required </b>:
                                            </td>
                                            <td align="left" class="Label">
                                                <select name="ddlExpHoroscope" id="ddlExpHoroscope" onChange={handleChange}>
                                                <option value="0">ஜாதகம் கட்டாயமா</option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                                </select>    
                                            </td>
                                            <td align="left">
                                                <b>Marital Status </b>:
                                            </td>
                                            <td align="left" class="Label">
                                                    <select name="ddlExpMartialStatus" id="ddlExpMartialStatus" onChange={handleChange}>
                                                        <option value="0">திருமணம் குறித்து</option>
                                                        <option value="1">Unmarried</option>
                                                        <option value="2">Married</option>
                                                        <option value="3">Widow/Widower</option>
                                                        <option value="4">Divorce</option>
                                                        <option value="5">Doesnt Matter</option>
                                                    </select>
                                            </td>
                                        <tr>
                                            <td>
                                                <b>Caste </b>:
                                            </td>
                                            <td align="left">
                                                <select name="ddlExpCaste"  id="ddlExpCaste" class="dd_NoWidth" onChange={handleChange}>
                                                <option selected="selected" value="0">Select - ஜாதி</option>
                                                <option value="1">Any</option>
                                                <option value="2">Naidu</option>
                                                <option value="2">Nayudu</option>
                                                <option value="3">Vanniyar</option>
                                                <option value="4">Chettiyar</option>
                                                <option value="5">Mudhalaiyar</option>
                                                <option value="6">Gounder</option>
                                                <option value="7">Brahmin</option>
                                                <option value="8">Devar</option>
                                                <option value="9">Others</option>
                                                </select>
                                            </td>
                                            <td  align="left">
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
                                                <button className="btn btn-primary"
                                                    onClick={handleSearch}>Search</button>
                                            </td>
                                        </tr>
                                        <tr><td>&nbsp;&nbsp;</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid"> 
                        <div className="row mt-4">
                            <div className="col-14">
                                <div className="card">
                                    <div style={{backgroundColor: "gold"}} className="card-header rounded-div">
                                        <h4 style={{color : "red"}}> Search Result - {data.length} </h4>
                                    </div>
                                    <div className="card-body" id="varan"> 
                                        <table border={1}>
                                        {
                                            data.map((data, i) => (
                                            
                                            <tr key={i}>
                                                <td align='left'  border={3}>
                                                    <a href={"/varan/viewVaran/"+data.id}>
                                                    <img src={'http://localhost:8089/images/' + data.photo1} 
                                                      class="uniform-size"></img></a><br/>
                                                </td>
                                                <td>
                                                    &nbsp; {i+1}. {data.name} (s/o) { data.fatherName} <br/>
                                                    &nbsp; {data.sex}, {data.dobStr}, {data.age}, {data.starTamil} , {data.raasiTamil}, <br/> 
                                                    &nbsp; {data.casteStr}, {data.subCaste}  <br/> 
                                                    &nbsp; {data.placeOfBirth}, {data.nativity}  <br/>
                                                    &nbsp; <b>Mob:</b> {data.mobileNo} , <br/> 
                                                    &nbsp; <b>Job:</b> {data.job} <br/> 
                                                    &nbsp; <b>Email:</b> {data.email} <br/> 
                                                    &nbsp; <b>Income:</b> {data.income}      
                                                </td>
                                                
                                                <td align='left'  border={3}>
                                                    <a href={"/varan/viewVaran/"+data.id}>
                                                    <img src={'http://localhost:8089/images/' + data.photo1} 
                                                      class="uniform-size"></img></a><br/>
                                                </td>
                                                <td>
                                                    &nbsp; {i+1}. {data.name} (s/o) { data.fatherName} <br/>
                                                    &nbsp; {data.sex}, {data.dobStr}, {data.age}, {data.starTamil} , {data.raasiTamil}, <br/> 
                                                    &nbsp; {data.casteStr}, {data.subCaste}  <br/> 
                                                    &nbsp; {data.placeOfBirth}, {data.nativity}  <br/>
                                                    &nbsp; <b>Mob:</b> {data.mobileNo} , <br/> 
                                                    &nbsp; <b>Job:</b> {data.job} <br/> 
                                                    &nbsp; <b>Email:</b> {data.email} <br/> 
                                                    &nbsp; <b>Income:</b> {data.income}      
                                                </td>
                                            </tr>
                                            )
                                            )
                                        }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default SearchVaran;
