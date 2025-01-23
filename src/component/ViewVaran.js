import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import PdfPreview from "./subcomponent/PdfPreview";
import PdfViewer from "./subcomponent/PdfViewer";
import PdfView from "./subcomponent/PdfView";

const ViewVaran = () => {

    const [data, setData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
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
    const [file, setFile] = useState('');
    const [photo, setPhoto] = useState('');

    const handleUploadFile = () => {
        console.log("Upload File");
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:8089/uploadFile/'+id, formData)
            .then( res => {console.log("Uploaded File")})
            .catch(err => console.log(err));
            navigate("/varan/viewVaran/"+id);
        };

    const handleUploadPhoto = () => {
        alert("upload photo")
        console.log("Upload Photo");
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:8089/uploadPhoto/'+id, formData)
            .then( res => {console.log("Uploaded Photo")})
            .catch(err => console.log(err));
        navigate("/varan/viewVaran/"+id);
    };

    function handlePhotoChange(e) {
        console.log("handlePhotoChange");
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }

    
    function handleFileChange(e) {
        console.log("handleFileChange");
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    //onChange = { (e) => setPhoto(e.target.files[0])}
    
    const [formVaran, setFormVaran] = useState({
        name: "",
        sex: "",
        sexStr: "",
        dob: "",
        dobStr: "",
        timeOfBirth: "00",
        timeOfBirthStr: "00",
        minOfBirth: "00",
        minOfBirthStr: "00",
        secOfBirth: "AM",
        secOfBirthStr: "AM",
        placeOfBirth: "",
        nativity: "",
        motherTongue: "",
        motherTongueStr: "",
        maritialStatus: "",
        maritialStatusStr: "",
        fatherName: "",
        fatherAlive: "",
        fatherAliveStr: "",
        fatherJob: "",
        motherName: "",
        motherAlive: "",
        motherAliveStr: "",
        motherJob: "",
        marriedElderBrothers: "0",
        marriedElderBrothersStr: "இல்லை",
        marriedYoungerBrothers: "0",
        marriedYoungerBrothersStr: "இல்லை",
        marriedElderSisters: "0",
        marriedElderSistersStr: "இல்லை",
        marriedYoungerSisters: "0",
        marriedYoungerSistersStr: "இல்லை",
        unMarriedElderBrothers: "0",
        unMarriedElderBrothersStr: "இல்லை",
        unMarriedYoungerBrothers: "0",
        unMarriedYoungerBrothersStr: "இல்லை",
        unMarriedElderSisters: "0",
        unMarriedElderSistersStr: "இல்லை",
        unMarriedYoungerSisters: "0",
        unMarriedYoungerSistersStr: "இல்லை",
        residentialType : "",
        residentialTypeStr : "",
        vehicleOwned : "",
        vehicleOwnedStr : "",
        otherDetails: "",
        height: "",
        heightStr: "",
        weight: "",
        weightStr: "",
        bloodGroup: "",
        bloodGroupStr: "",
        diet: "",
        dietStr: "",
        complexion: "",
        complexionStr: "", 
        physicalStatus: "",
        physicalStatusStr: "",
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
        starStr: "",
        raasi: "",
        raasiStr: "",
        raasiSign: "",
        raasiSignStr: "",
        laknamNo: "",
        laknamNoStr: "",
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
        horo1Str: "",
        horo2: "",
        horo2Str: "",
        horo3: "",
        horo3Str: "",
        horo4: "",
        horo4Str: "",
        horo5: "",
        horo5Str: "",
        horo6: "",
        horo6Str: "",
        horo7: "",
        horo7Str: "",
        horo8: "",
        horo8Str: "",
        horo9: "",
        horo9Str: "",
        horo10: "",
        horo10Str: "",
        horo11: "",
        horo11Str: "",
        horo12: "",
        horo12Str: "",
        amsam1: "",
        amsam1Str: "",
        amsam2: "",
        amsam2Str:"",
        amsam3: "",
        amsam3Str:"",
        amsam4: "",
        amsam4Str:"",
        amsam5: "",
        amsam5Str:"",
        amsam6: "",
        amsam6Str:"",
        amsam7: "",
        amsam7Str:"",
        amsam8: "",
        amsam8Str:"",
        amsam9: "",
        amsam9Str:"",
        amsam10: "",
        amsam10Str:"",
        amsam11: "",
        amsam11Str:"",
        amsam12: "",
        amsam12Str:"",
        expEducation: "",
        expEducationStr: "",
        expQualification: "",
        expPlaceOfJob: "",
        expIncome: "1000",
        office:"",
        officeStr:"",
        expJob:"",
        expJobMust:"",
        expJobMustStr:"",
        preferredAgeFrom: "20",
        preferredAgeFromStr: "20",
        preferredAgeTo: "35",
        preferredAgeToStr: "35",
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
        schemeStr: "",
        amount: "1000",
        paidAmount: "1000",
        transactionDate: "",
        modeOfPayment: "",
        modeOfPaymentStr: "",
        reference: "",
        transactionReference: "",
        file1:"",
        file2:"",
        photo1:"",
        phone2:"",
        createdOn: "",
        createdOnStr:"",
        updatedOn:"",
        updatedOnStr:""
    });

    useEffect( () => {
        axios.get("http://localhost:8089/viewVaran/"+id)
            .then(res => {
                setFormVaran({...formVaran, name: res.data[0].name, sex: res.data[0].sex, sexStr: res.data[0].sexStr, dob: res.data[0].dob, dobString: res.data[0].dobString,
                    timeOfBirth: res.data[0].timeOfBirth,timeOfBirthStr: res.data[0].timeOfBirthStr, minOfBirth: res.data[0].minOfBirth, minOfBirthStr: res.data[0].minOfBirthStr, secOfBirth: res.data[0].secOfBirth,secOfBirthStr: res.data[0].secOfBirthStr,
                    placeOfBirth: res.data[0].placeOfBirth, nativity: res.data[0].nativity, motherTongue: res.data[0].motherTongue, motherTongueStr: res.data[0].motherTongueStr,
                    maritialStatus: res.data[0].maritialStatus, maritialStatusStr: res.data[0].maritialStatusStr, fatherName: res.data[0].fatherName, fatherAlive: res.data[0].fatherAlive, fatherAliveStr: res.data[0].fatherAliveStr,
                    fatherJob: res.data[0].fatherJob, motherName: res.data[0].motherName, motherAlive: res.data[0].motherAlive, motherAliveStr: res.data[0].motherAliveStr, motherJob: res.data[0].motherJob,
                    marriedElderBrothers: res.data[0].marriedElderBrothers, marriedYoungerBrothers: res.data[0].marriedYoungerBrothers,
                    marriedElderSisters: res.data[0].marriedElderSisters, marriedYoungerSisters: res.data[0].marriedYoungerSisters, unMarriedElderBrothers: res.data[0].unMarriedElderBrothers,
                    unMarriedYoungerBrothers: res.data[0].unMarriedYoungerBrothers, unMarriedElderSisters: res.data[0].unMarriedElderSisters,
                    unMarriedYoungerSisters: res.data[0].unMarriedYoungerSisters, marriedElderBrothersStr: res.data[0].marriedElderBrothersStr, marriedYoungerBrothersStr: res.data[0].marriedYoungerBrothersStr,
                    marriedElderSistersStr: res.data[0].marriedElderSistersStr, marriedYoungerSistersStr: res.data[0].marriedYoungerSistersStr, unMarriedElderBrothersStr: res.data[0].unMarriedElderBrothersStr,
                    unMarriedYoungerBrothersStr: res.data[0].unMarriedYoungerBrothersStr, unMarriedElderSistersStr: res.data[0].unMarriedElderSistersStr,
                    unMarriedYoungerSistersStr: res.data[0].unMarriedYoungerSistersStr, residentialType: res.data[0].residentialType, residentialTypeStr: res.data[0].residentialTypeStr, vehicleOwned: res.data[0].vehicleOwned, vehicleOwnedStr: 
                    res.data[0].vehicleOwnedStr, otherDetails: res.data[0].otherDetails, height: res.data[0].height, heightStr: res.data[0].heightStr, weight: res.data[0].weight, weightStr: res.data[0].weightStr, bloodGroup: res.data[0].bloodGroup, bloodGroupStr: res.data[0].bloodGroupStr, diet: res.data[0].diet,  dietStr: res.data[0].dietStr,
                    complexion: res.data[0].complexion, complexionStr: res.data[0].complexionStr, physicalStatus: res.data[0].physicalStatus, physicalStatusStr: res.data[0].physicalStatusStr, education: res.data[0].education, educationStr: res.data[0].educationStr, qualification: res.data[0].qualification, job: res.data[0].job,
                    placeOfJob: res.data[0].placeOfJob, income: res.data[0].income, caste: res.data[0].caste, casteStr: res.data[0].casteStr, subCaste: res.data[0].subCaste, gothram: res.data[0].gothram,
                    star: res.data[0].star, starTamil: res.data[0].starTamil, starStr: res.data[0].starStr, raasi: res.data[0].raasi, raasiStr: res.data[0].raasiStr, raasiTamil: res.data[0].raasiTamil, laknamNo: res.data[0].laknamNo, laknamNoStr: res.data[0].laknamNoStr, laknam : res.data[0].laknam, laknamStr : res.data[0].laknamStr, laknamTamil : res.data[0].laknamTamil, laknamStr : res.data[0].laknamStr, permanentAddress: res.data[0].permanentAddress,
                    presentAddress : res.data[0].presentAddress , landLineNumbers: res.data[0].landLineNumbers, contactPerson : res.data[0].contactPerson , mobileNo: res.data[0].mobileNo,
                    email: res.data[0].email, dasa: res.data[0].dasa, dasaYears: res.data[0].dasaYears, dasaMonths: res.data[0].dasaMonths, dasaDays: res.data[0].dasaDays,
                    horo1: res.data[0].horo1, horo2: res.data[0].horo2, horo3: res.data[0].horo3, horo4: res.data[0].horo4, horo5: res.data[0].horo5, horo6: res.data[0].horo6, horo7: res.data[0].horo7,
                    horo8: res.data[0].horo8, horo9: res.data[0].horo9, horo10: res.data[0].horo10, horo11: res.data[0].horo11, horo12: res.data[0].horo12, amsam1: res.data[0].amsam1, amsam2: res.data[0].amsam2,
                    amsam3: res.data[0].amsam3, amsam4: res.data[0].amsam4, amsam5: res.data[0].amsam5, amsam6: res.data[0].amsam6, amsam7: res.data[0].amsam7, amsam8: res.data[0].amsam8, amsam9: res.data[0].amsam9,
                    amsam10: res.data[0].amsam10, amsam11: res.data[0].amsam11, amsam12: res.data[0].amsam12, horo1Str: res.data[0].horo1Str, horo2Str: res.data[0].horo2Str, horo3Str: res.data[0].horo3Str, horo4Str: res.data[0].horo4Str, horo5Str: res.data[0].horo5Str, horo6Str: res.data[0].horo6Str, horo7Str: res.data[0].horo7Str,
                    horo8Str: res.data[0].horo8Str, horo9Str: res.data[0].horo9Str, horo10Str: res.data[0].horo10Str, horo11Str: res.data[0].horo11Str, horo12Str: res.data[0].horo12Str, amsam1Str: res.data[0].amsam1Str, amsam2Str: res.data[0].amsam2Str,
                    amsam3Str: res.data[0].amsam3Str, amsam4Str: res.data[0].amsam4Str, amsam5Str: res.data[0].amsam5Str, amsam6Str: res.data[0].amsam6Str, amsam7Str: res.data[0].amsam7Str, amsam8Str: res.data[0].amsam8Str, amsam9Str: res.data[0].amsam9Str,
                    amsam10Str: res.data[0].amsam10Str, amsam11Str: res.data[0].amsam11Str, amsam12Str: res.data[0].amsam12Str, expEducation: res.data[0].expEducation, expEducationStr: res.data[0].expEducationStr,  expQualification: res.data[0].expQualification, expPlaceOfJob: res.data[0].expPlaceOfJob,
                    expJob: res.data[0].expJob, expJobMust: res.data[0].expJobMust, expJobMustStr: res.data[0].expJobMustStr, expIncome: res.data[0].expIncome, office: res.data[0].office, officeStr: res.data[0].officeStr, preferredAgeFrom: res.data[0].preferredAgeFrom, preferredAgeFromStr: res.data[0].preferredAgeFromStr, preferredAgeTo: res.data[0].preferredAgeTo, preferredAgeToStr: res.data[0].preferredAgeToStr, expCaste: res.data[0].expCaste, expCasteStr: res.data[0].expCasteStr,
                    expSubCaste: res.data[0].expSubCaste, expMartialStatus: res.data[0].expMartialStatus, expMartialStatusStr: res.data[0].expMartialStatusStr, expDiet: res.data[0].expDiet, expDietStr: res.data[0].expDietStr, expHoroscope: res.data[0].expHoroscope, expHoroscopeStr: res.data[0].expHoroscopeStr, otherComments: res.data[0].otherComments, photo1: res.data[0].photo1, photo2: res.data[0].photo2,
                    file1 : res.data[0].file1, file2 : res.data[0].file2, scheme: res.data[0].scheme, schemeStr: res.data[0].schemeStr, username: res.data[0].username, password: res.data[0].password, amount: res.data[0].amount, paidAmount: res.data[0].paidAmount, dobStr: res.data[0].dobStr, 
                    transactionDate: res.data[0].transactionDate, modeOfPayment: res.data[0].modeOfPayment , modeOfPaymentStr: res.data[0].modeOfPaymentStr , transactionReference: res.data[0].transactionReference, reference: res.data[0].reference, isMarried: res.data[0].isMarried, isDeleted: res.data[0].isDeleted,
                    createdBy: res.data[0].createdBy, createdOn: res.data[0].createdOn, createdOnStr: res.data[0].createdOnStr, updatedBy: res.data[0].updatedBy, updatedOn: res.data[0].updatedOn, updatedOnStr: res.data[0].updatedOnStr   
                 });
                 console.log("use Effect : ");
                 console.log(formVaran);
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

    const handlePrint = (e) => {
    var content = document.getElementById("varan");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
    }

    return (
        <div>
        <Navbar/>
        <div>
            <div className="container-fluid rounded-div" >
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="m-0">VIEW VARAN/விபரம் சரிபார்ப்பு - <b>மணமகள்/மணமகன் : {formVaran.name} </b></h5>
                        </div>
                        <iframe id="ifmcontentstoprint" style={{height: "0px", width: "0px", position: "absolute"}}></iframe>
                        <div className="card-body" id="varan">                    
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h4 style={{color: 'white'}}>Personal and Family Details</h4>
                            </div>
                            <form >
                                <div className="row row-gap-2"> 
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Name - பெயர்</b> &nbsp; 
                                    </label>
                                    <input
                                    type="text"
                                    placeholder="வரன் பெயர்"
                                    className="form-input"
                                    name="txtName"
                                    value={formVaran.name} readOnly
                                    />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Sex - பாலினம்</b>
                                    </label><br/>
                                    <input type="text" name="ddlSex" id="ddlSex" class="dd_NoWidth" 
                                        className="font-size-13" value={formVaran.sexStr} readOnly  onChange={handleChange}/>
                                    </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Date of Birth - பிறந்த தேதி</b>
                                    </label>
                                    <input
                                    type="text"
                                    placeholder="பிறந்த தேதி"
                                    className="form-input"
                                    name="txtDob"
                                    id="txtDob"
                                    value={formVaran.dobStr} readOnly
                                    />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Time of Birth - பிறந்த நேரம்</b>
                                    </label> <br/>
                                    <input type="text" name="ddlTimeOfBirth" id="ddlTimeOfBirth" class="dd_NoWidth"
                                    onChange={handleChange} readOnly value={formVaran.timeOfBirthStr} size="4"/>
                                
                                    &nbsp;&nbsp;
                            <input type="text" name="ddlMinOfBirth" id="ddlMinOfBirth" class="dd_NoWidth"
                                onChange={handleChange} value={formVaran.minOfBirthStr} readOnly size="4"/>
                            
                            &nbsp;&nbsp;
                            <input type="text" name="ddlSecOfBirth" id="ddlSecOfBirth" class="dd_NoWidth"
                                onChange={handleChange} value={formVaran.secOfBirthStr} readOnly  size="10"/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Place Of Birth</b>
                                    </label>
                                    <input
                                    type="text"
                                    placeholder="பிறந்த இடம்"
                                    className="form-input"
                                    name="txtPlaceOfBirth"
                                    id="txtPlaceOfBirth"
                                    onChange={handleChange}
                                    readOnly
                                    value={formVaran.placeOfBirth}
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
                                    value={formVaran.nativity}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13">
                                    <b>Mother Tongue</b>
                                    </label>
                                    <input type="text"
                                    placeholder="தாய் மொழி"
                                    className="form-input"
                                    name="ddlMotherTongue"
                                    id="ddlMotherTongue"
                                    value={formVaran.motherTongueStr}
                                    readOnly
                                    onChange={handleChange}
                                    />  
                                </div>
                                <div className="col-3">
                                    <label htmlFor="" className="font-size-13"/>
                                    <b>Marital status </b><br/>
                                    <input type="text" name="ddlMaritialStatus" id="ddlMaritialStatus" class="dd_NoWidth" 
                                        value={formVaran.maritialStatusStr} readOnly/>
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
                                    value={formVaran.fatherName}
                                    readOnly
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="" className="font-size-13"/>
                                    <b>Father's Alive</b> <br/>
                                    <input type="text" name="ddlFatherAlive" id="ddlFatherAlive" class="dd_NoWidth" 
                                    onChange={handleChange} value={formVaran.fatherAliveStr}/>
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
                                    value={formVaran.fatherJob}
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
                                    value={formVaran.motherName}
                                    readOnly
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="" className="font-size-13"/>
                                    <b>Mother's Alive</b> <br/>
                                    <input type="text" name="ddlMotherAlive" id="ddlMotherAlive" class="dd_NoWidth"
                                        onChange={handleChange} value={formVaran.motherAliveStr} readOnly />
                                
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
                                    value={formVaran.motherJob} readOnly
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
                                        <input type="text" name="ddlMarriedElderBrothers" id="ddlMarriedElderBrothers" class="dd_NoWidth_WhiteBorder" 
                                        value={formVaran.marriedElderBrothersStr} readOnly onChange={handleChange}/>
                                    </td>
                                    <td>
                                        <input type="text" name="ddlMarriedYoungerBrothers" id="ddlMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder" 
                                            value={formVaran.marriedYoungerBrothersStr} readOnly onChange={handleChange}/>
                                    </td>
                                    <td>
                                        <input type="text" name="ddlMarriedElderSisters" id="ddlMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                            value={formVaran.marriedElderSistersStr} readOnly onChange={handleChange}/>
                                    </td>
                                    <td>
                                        <input name="ddlMarriedYoungerSisters" id="ddlMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                            value={formVaran.marriedYoungerSistersStr} readOnly onChange={handleChange} />
                                    </td>
                                    <td>&nbsp;
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td class="Label">
                                        <b>UnMarried</b>
                                    </td>
                                    <td >
                                        <input name="ddlUnMarriedElderBrothers" id="ddlUnMarriedElderBrothers" class="dd_NoWidth_WhiteBorder" 
                                            value={formVaran.unMarriedElderBrothersStr} readOnly onChange={handleChange}/>
                                    </td>
                                    <td>
                                        <input type="text" name="ddlUnMarriedYoungerBrothers" id="ddlUnMarriedYoungerBrothers" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran.unMarriedYoungerBrothersStr} readOnly onChange={handleChange}/>
                                    </td>
                                    <td>
                                        <input name="ddlUnMarriedElderSisters" id="ddlUnMarriedElderSisters" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran.unMarriedElderSistersStr} readOnly onChange={handleChange}/>
                                    
                                    </td>
                                    <td>
                                        <input type="text" name="ddlUnMarriedYoungerSisters" id="ddlUnMarriedYoungerSisters" class="dd_NoWidth_WhiteBorder"
                                        value={formVaran.unMarriedYoungerSistersStr} readOnly onChange={handleChange}/>
                                    
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
                                            <input type="text" name="ddlResidentialType" id="ddlResidentialType"
                                            value={formVaran.residentialTypeStr} readOnly />
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
                                            <input type="text" name="ddlVehicleOwned" id="ddlVehicleOwned"
                                            value={formVaran.vehicleOwnedStr} readOnly />
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
                                            value={formVaran.otherDetails} readOnly onChange={handleChange}></textarea>
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
                                        <input type="text" name="ddlHeight" id="ddlHeight" class="dd_NoWidth" style={{width: "150px"}}
                                        value={formVaran.heightStr} onChange={handleChange} readOnly/>
                                    </td>
                                    <td>
                                        <b> Weight </b>: &nbsp;&nbsp;
                                    </td>
                                    <td align="left">
                                        <input type="text" name="ddlWeight" id="ddlWeight" class="dd_NoWidth"
                                            onChange={handleChange} value={formVaran.weightStr} readOnly/>
                                    </td>
                                    <td align="right" class="Label">
                                            <b>Blood Group</b> : &nbsp;
                                    </td>
                                    <td  align="left">
                                        <input type="text" name="ddlBloodGroup" id="ddlBloodGroup" class="dd_NoWidth"
                                            onChange={handleChange} value={formVaran.bloodGroupStr} />
                                    </td>
                                    </tr>
                                    <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                                    <tr>
                                        <td>
                                            <b>Diet </b>: &nbsp;&nbsp;
                                        </td>
                                        <td align="left">
                                            <input type="text" name="ddlDiet" id="ddlDiet" 
                                            value={formVaran.dietStr} readOnly onChange={handleChange}/>
                                                
                                        </td>
                                        <td align="left">
                                            <b>Disability</b> : &nbsp;
                                        </td>
                                        <td>                    
                                            <input type="text" name="ddlPhysicalStatus" id="ddlPhysicalStatus" 
                                            value={formVaran.physicalStatusStr} readOnly onChange={handleChange}/>
                                        </td>
                                        <td align="left" class="Label">
                                            <b>Complexion</b> : &nbsp;
                                        </td>
                                        <td align="left">
                                            <input type="text" name="ddlComplexion" id="ddlComplexion"
                                            value={formVaran.complexionStr} readOnly  onChange={handleChange}/>   
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
                                    &nbsp;<b>Education </b>: &nbsp;&nbsp;
                                    <input name="txtEducation" type="text" 
                                        placeholder="கல்வி தகுதி" id="txtEducation" class="TextBox"
                                        value={formVaran.educationStr} readOnly
                                        onChange={handleChange}/>
                                    </td>
                                    <td align="left">
                                    &nbsp;<b>Qualification </b>: &nbsp;&nbsp;
                                    <input name="txtQualification" type="text" 
                                        placeholder="கல்வி தகுதி" id="txtQualification" class="TextBox"
                                        value={formVaran.qualification} readOnly
                                        onChange={handleChange}/>
                                    </td>
                                    <td align="left">
                                        &nbsp;<b>Job</b> : &nbsp;&nbsp;              
                                            <input name="txtJob" type="text" id="txtJob"
                                                placeholder="உத்யோகம்" class="TextBox" 
                                                value={formVaran.job} readOnly
                                                onChange={handleChange}/>
                                    </td>
                                    <td align="left">
                                        &nbsp;<b>Place Of Job</b> : &nbsp;&nbsp;
                                            <input name="txtPlaceOfJob" type="text" id="txtPlaceOfJob" class="TextBox"
                                                placeholder="வேலை பார்க்கும் இடம்" onChange={handleChange}
                                                value={formVaran.placeOfJob} readOnly
                                                />
                                        
                                    </td>
                                    <td>
                                        &nbsp;&nbsp;<b>Income Per Month </b>: &nbsp;&nbsp;
                                    
                                        <input name="txtIncome" type="text" id="txtIncome"
                                            placeholder="மாத வருமானம்" class="TextBox" 
                                            value={formVaran.income} readOnly
                                            onChange={handleChange}/>    
                                    </td>
                                    <td>
                                        &nbsp;&nbsp;<b>Office </b>: &nbsp;&nbsp;
                                    
                                        <input name="txtIncome" type="text" id="txtIncome"
                                            placeholder="மாத வருமானம்" class="TextBox" 
                                            value={formVaran.officeStr} readOnly
                                            onChange={handleChange}/>    
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
                                            <input type="text" name="ddlCaste"  id="ddlCaste" class="dd_NoWidth" 
                                                onChange={handleChange} value={formVaran.casteStr} readOnly />
                                                
                                        </td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td><b>Sub Caste</b> : &nbsp; &nbsp; </td>
                                        <td>
                                            <input type="text" name="ddlSubCaste" id="ddlSubCaste"
                                                placeholder="உட்பிரிவு" class="dd_NoWidth" 
                                                value={formVaran.subCaste} readOnly onChange={handleChange}/>
                                        </td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td align="right" class="Label">
                                            <b>Gothram </b>: &nbsp;&nbsp;
                                        </td>
                                        <td >
                                            <input name="txtGothram" type="text" id="txtGothram" 
                                                placeholder="கோத்திரம்" class="TextBox" 
                                                value={formVaran.gothram} readOnly onChange={handleChange}/>
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
                                        <input name="ddlStar" id="ddlStar" class="dd_NoWidth"
                                            value={formVaran.starStr} onChange={handleChange}/>
                                                                        </td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td>&nbsp;&nbsp;</td>
                                        <td>
                                            <b>Raasi/Moon Sign </b>: &nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <input type="text" name="ddlRaasiSign" id="ddlRaasiSign" class="dd_NoWidth"
                                            value={formVaran.raasiStr} onChange={handleChange}/>
                                            
                                        </td>

                                        <td align="left" colSpan={3}>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td align="right" class="Label">
                                                        &nbsp;&nbsp;<b>Padham</b> : &nbsp;&nbsp;
                                                    </td>
                                                    <td align="left" class="Label">
                                                        <input type="text" name="ddlLaknamNo" id="ddlLaknamNo" class="dd_NoWidth"
                                                            value={formVaran.laknamNo} onChange={handleChange}/>
                                                    </td>
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
                                                        <input type="text" name="ddlLaknam" id="ddlLaknam" class="dd_NoWidth"
                                                            value={formVaran.laknamStr} />
                                                    
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
                                                        class="TextBox" value={formVaran.permanentAddress} readOnly
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
                                                            class="TextBox" onChange={handleChange} value={formVaran.presentAddress} readOnly></textarea>
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
                                                            class="TextBox" value={formVaran.landLineNumbers}></textarea>
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
                                                            value={formVaran.contactPerson} readOnly class="TextBox" placeholder="தொடர்பு கொள்ளவேண்டியவர்"/>
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
                                                    value={formVaran.mobileNo} readOnly placeholder="மொபைல் எண்" class="TextBox"/>
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
                                                    value={formVaran.email} readOnly placeholder="மின்னஞ்சல்" class="TextBox"/>
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
                                    <table border="0" cellpadding="0" cellspacing="0" width="90%">
                                        <tr>
                                            <td>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td width="80%" height="28">
                                                            <table border="0" width="100%" cellpadding="0">
                                                                <tr>
                                                                    <td align="center" class="Label">
                                                                        <b>Balance </b>: &nbsp;&nbsp;
                                                                        <input name="txtDasa" type="text" id="txtDasa" 
                                                                            value={formVaran.dasa} readOnly class="TextBox" /> &nbsp;&nbsp;
                                                                        <b>Dasa</b> &nbsp;&nbsp;<input name="txtDasaYears" type="text" id="txtDasaYears" 
                                                                            value={formVaran.dasaYears} readOnly class="TextBox" /> &nbsp;&nbsp;
                                                                        <b>Year(s) </b>&nbsp;&nbsp;<input name="txtDasaMonths" type="text" id="txtDasaMonths" 
                                                                            value={formVaran.dasaMonths} readOnly class="TextBox" /> &nbsp;&nbsp;
                                                                        <b>Month(s)</b> &nbsp;&nbsp;<input name="txtDasaDays" type="text" id="txtDasaDays" 
                                                                            value={formVaran.dasaDays} readOnly class="TextBox" /> &nbsp;&nbsp;
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
                                                                                                <textarea name="txtHoro12" rows="3" cols="13" id="txtHoro12" 
                                                                                                value={formVaran.horo12Str} readOnly class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro1"  id="txtHoro1"
                                                                                                    value={formVaran.horo1Str}  readOnly  rows="3" cols="12"  class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro2" id="txtHoro2"
                                                                                                    value={formVaran.horo2Str} readOnly rows="3" cols="12"  class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro3" id="txtHoro3"
                                                                                                    value={formVaran.horo3Str} readOnly   rows="3" cols="12" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                                value={formVaran.horo11Str} readOnly rows="3" cols="12" id="txtHoro11" class="TextBox_WhiteBorder" ></textarea>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="100px">
                                                                                                            <textarea name="txtHoro10" 
                                                                                                                value={formVaran.horo10Str} readOnly rows="3" cols="12" id="txtHoro10" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                                value={formVaran.horo4Str} readOnly rows="3" cols="12" id="txtHoro4" class="TextBox_WhiteBorder" ></textarea>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="100px" >
                                                                                                            <textarea name="txtHoro5" 
                                                                                                                value={formVaran.horo5Str} readOnly rows="3" cols="12" id="txtHoro5" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                value={formVaran.horo9Str} rows="3" readOnly  cols="12" id="txtHoro9" class="TextBox_WhiteBorder" ></textarea>
                                                                                                
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro8" 
                                                                                                value={formVaran.horo8Str} rows="3" readOnly  cols="12" id="txtHoro8" class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro7" 
                                                                                                value={formVaran.horo7Str} rows="3" readOnly cols="12" id="txtHoro7" class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtHoro6"
                                                                                                    value={formVaran.horo6Str} rows="3" readOnly  cols="12" id="txtHoro6" class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                <textarea name="txtAmsam12"id="txtAmsam12" rows="3" cols="12"  
                                                                                                value={formVaran.amsam12Str}  class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px">
                                                                                                <textarea name="txtAmsam1" id="txtAmsam1"  rows="3" cols="12" 
                                                                                                value={formVaran.amsam1Str} class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtAmsam2" rows="3" cols="12" id="txtAmsam2" 
                                                                                                value={formVaran.amsam2Str}  class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtAmsam3" rows="3" cols="12" id="txtAmsam3" 
                                                                                                value={formVaran.amsam3Str}  class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                            <textarea name="txtAmsam11" rows="3" cols="12" id="txtAmsam11" 
                                                                                                            value={formVaran.amsam11Str} class="TextBox_WhiteBorder" ></textarea>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="100px" >
                                                                                                            <textarea name="txtAmsam10" rows="3" cols="12" id="txtAmsam10" 
                                                                                                            value={formVaran.amsam10Str}  class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                            <textarea name="txtAmsam4" rows="3" cols="12" id="txtAmsam4"
                                                                                                            value={formVaran.amsam4Str} class="TextBox_WhiteBorder" ></textarea>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td width="100px" >
                                                                                                            <textarea name="txtAmsam5" rows="3" cols="12" id="txtAmsam5"
                                                                                                            value={formVaran.amsam5Str} class="TextBox_WhiteBorder" ></textarea>
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
                                                                                                <textarea name="txtAmsam9" rows="3" cols="12" id="txtAmsam9" 
                                                                                                value={formVaran.amsam9Str} class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtAmsam8" rows="3" cols="12" id="txtAmsam8" 
                                                                                                value={formVaran.amsam8Str} class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtAmsam7" rows="3" cols="12" id="txtAmsam7" 
                                                                                                value={formVaran.amsam7Str}  class="TextBox_WhiteBorder" ></textarea>
                                                                                            </td>
                                                                                            <td width="100px" >
                                                                                                <textarea name="txtAmsam6" rows="3" cols="12" id="txtAmsam6" 
                                                                                                    value={formVaran.amsam6Str} 
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
                                <h5 style={{color : "white"}}>
                                    Partner Expectation Details  (வாழ்க்கை துணை பற்றிய எதிர்பார்ப்பு) </h5>
                            </div>
                            <div>
                            <table>
                            <tr>
                                <td>
                                    <b>Qualification</b> :
                                </td>
                                <td>
                                    <input name="txtExpQualification" type="text" id="txtExpQualification" 
                                    placeholder="கல்வி தகுதி" readOnly
                                    value={formVaran.expEducationStr}  class="TextBox" />
                                    <input name="txtExpQualification" type="text" id="txtExpQualification" 
                                    placeholder="கல்வி தகுதி"
                                    value={formVaran.expQualification} readOnly  class="TextBox" />
                                </td>
                                <td align="right" class="Label">
                                    <b>Job</b> :
                                </td>
                                <td align="left">
                                    <input name="txtExpJob" type="text" id="txtExpJob" 
                                    placeholder="வேலை" value={formVaran.expJob}  class="TextBox" readOnly/>
                                </td>
                                <td align="left" class="Label">
                                    <b>Job Going </b>:
                                </td>
                                <td align="left">
                                    <input type="text" name="ddlExpJob" id="ddlExpJob" value={formVaran.expJobMustStr} readOnly />  
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Income Per Month </b>:
                                </td>
                                <td >
                                    <input name="txtExpIncome" type="text" id="txtExpIncome" 
                                    placeholder="மாத வருமானம்" class="TextBox" value={formVaran.expIncome} readOnly/>
                                </td>
                                <td  align="right">
                                    <b>Preferred Age </b>:
                                </td>
                                <td align="left" class="Label">
                                    <input type="text" name="ddlPreferredAgeFrom" id="ddlPreferredAgeFrom" 
                                    value={formVaran.preferredAgeFromStr} readOnly class="dd_NoWidth" onChange={handleChange} size={4}/>
                                        &nbsp;&nbsp; To &nbsp;&nbsp;
                                    <input type="text" name="ddlPreferredAgeTo" id="ddlPreferredAgeTo" 
                                    value={formVaran.preferredAgeToStr} readOnly class="dd_NoWidth" onChange={handleChange}  size={4}/>
                                    </td>
                                    <td>
                                        <b>Preferred Job Location</b>
                                    </td>
                                    <td>
                                        <input name="txtExpPlaceOfJob" type="text" id="txtExpPlaceOfJob" 
                                        placeholder="வேலை பார்க்கும் இடம்" class="TextBox" value={formVaran.expPlaceOfJob} readOnly />
                                    </td>
                                </tr>
                                <td align="left">
                                    <b>Diet</b> :
                                </td>
                                <td align="left">
                                    <input type="text" name="ddlExpDiet" id="ddlExpDiet" value={formVaran.expDietStr}/>
                                </td>
                                <td align="right">
                                <b>Horoscope Required </b>:
                                </td>
                                <td align="left" class="Label">
                                    <input type="text" name="ddlExpHoroscopeRequired" id="ddlExpHoroscopeRequired" 
                                    value={formVaran.expHoroscopeStr} readOnly/>
                                
                                </td>
                                <td align="left">
                                    <b>Marital Status </b>:
                                </td>
                                <td align="left" class="Label">
                                        <input type="text" name="ddlExpMartialStatus" id="ddlExpMartialStatus" 
                                        value={formVaran.expMartialStatusStr} readOnly/>
                                </td>
                            <tr>
                                <td>
                                    <b>Caste </b>:
                                </td>
                                <td align="left">
                                    <input type="text" name="ddlExpCaste"  id="ddlExpCaste" class="dd_NoWidth" 
                                    value={formVaran.expCasteStr} readOnly/>
                                </td>
                                <td  align="right">
                                    <b>Sub Caste</b> :
                                </td>
                                <td align="left">
                                        <input type="text" name="ddlExpSubCaste" id="ddlExpSubCaste" class="dd_NoWidth"
                                        value={formVaran.expSubCaste ? "Any" : "Nil" } readOnly/>     
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
                                    <textarea name="txtOtherComments" rows="4" cols="40" value={formVaran.otherComments}
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
                                value={formVaran.amount}
                                readOnly                        />
                            </div>

                            <div className="col-2">
                                <label htmlFor="txtAmount" className="font-size-13">
                                <b>Paid Amount</b>
                                </label>
                                <input
                                type="input"
                                className="form-input"
                                name="txtPaidAmount"
                                id="txtPaidAmount"
                                value={formVaran.paidAmount}
                                readOnly                        />
                            </div>
                            
                            <div className="col-2">
                                <label htmlFor="txtTransactionDate" className="font-size-13">
                                <b>Amount Paid Date</b>
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="txtTransactionDate"
                                    id="txtTransactionDate"
                                    value={formVaran.transactionDate}
                                    readOnly
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Mode Of Payment</b>
                                </label>
                                <input type="text"
                                    className="form-input"
                                    name="ddlModeOfPayment"
                                    id="ddlModeOfPayment"
                                    value={formVaran.modeOfPaymentStr} readOnly
                                    />
                            
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
                                value={formVaran.transactionReference} readOnly
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Scheme</b>
                                </label>
                                <input type="text" name="ddlScheme" id="ddlScheme" className="form-input" 
                                    value={formVaran.schemeStr} readOnly/>
                            </div>
                            <br/>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <h5 style={{color : "white"}}>
                                    Record Creation Details
                                </h5>
                            </div>

                            <div className="col-2">
                                <label htmlFor="txtCreatedBy" className="font-size-13">
                                <b>Created By</b>
                                </label>
                                <input
                                type="input"
                                className="form-input"
                                name="txtCreatedBy"
                                id="txtCreatedBy"
                                value={formVaran.createdBy}
                                readOnly                        />
                            </div>
                            
                            <div className="col-2">
                                <label htmlFor="txtCreatedOn" className="font-size-13">
                                <b>Created On</b>
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="txtCreatedOn"
                                    id="txtCreatedOn"
                                    value={formVaran.createdOnStr}
                                    readOnly
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Updated By</b>
                                </label>
                                <input type="text"
                                    className="form-input"
                                    name="txtUpdatedBy"
                                    id="txtUpdatedBy"
                                    value={formVaran.updatedBy} readOnly
                                    />
                            
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Updated On</b>
                                </label>
                                <input
                                type="input"
                                className="form-input"
                                name="txtUpdatedOn"
                                id="txtUpdatedOn"
                                placeholder="குறிப்பு"
                                value={formVaran.updatedOnStr} readOnly
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Married Recently</b>
                                </label>
                                <input type="text" name="txtMarriedRecently" id="txtMarriedRecently" className="form-input" 
                                    value={formVaran.isMarried ? "Yes" : "No"} readOnly size={5} width={5}/> 
                                    <button className="btn btn-primary">Married?</button>
                            </div>
                            <div className="col-2">
                                <label htmlFor="" className="font-size-13">
                                <b>Deleted Recently</b>
                                </label>
                                <input type="text" name="txtDeletedRecently" id="txtDeletedRecently" className="form-input" 
                                    value={formVaran.isDeleted ? "Yes" : "No"} readOnly/>
                            </div>
                            <br/>
                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <br/>
                                <h5 style={{color : "white"}}>
                                    Upload Profile & Photo
                                </h5>
                            </div>

                            <div className="col-2">
                                <table width={900}>
                                    <tr>
                                        <td>
                                            <img src={'http://localhost:8089/images/' + formVaran.photo1} name="photo1" id="photo1" width={350} height={350}/>
                                        </td>
                                        <td>
                                            <img src={photo} name="photo1" id="photo1" width={350} height={350} style={{border:0}}/>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td><td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <label htmlFor='file' className="font-size-13"> 
                                                <b>Upload Photos - புகைப்படம் அப்லோடு</b>
                                            </label>
                                            <input type='file' name="file" id="file" placeholder='Upload Profile Photo ' className='form-control'
                                                onChange={handlePhotoChange} />
                                                <button className='btn btn-warning' onClick={handleUploadPhoto} >Upload</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div style={{backgroundColor: "DodgerBlue"}}>
                                <br/>
                                <h5 style={{color : "white"}}>
                                    Upload Horoscope
                                </h5>
                            </div>

                            <div className="col-2">
                                <table width={900}>
                                    <tr>
                                        <td>
                                            <br/><a href={'http://localhost:8089/documents/'+formVaran.file1}><b>Jathakam - ஜாதகம் 1</b></a>
                                            &nbsp;&nbsp; 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <br/> <a href={'http://localhost:8089/documents/'+formVaran.file2}><b>Jathakam - ஜாதகம் 2</b></a>
                                        </td>
                                    </tr>
                                    <tr><td>&nbsp;</td></tr>
                                    <tr>
                                        <td>
                                            <label htmlFor='file' className="font-size-13"> 
                                                <b>Upload Horoscope File - ஜாதகம் அப்லோடு</b>
                                            </label>
                                            <input type='file' name="file" id="file" placeholder='Upload Horoscope File ' className='form-control'
                                                onChange = { (e) => setFile(e.target.files[0])}/>
                                                <button className='btn btn-warning' onClick={handleUploadFile} >Upload</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            </div>
                            <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary" type="submit">
                                {isUpdate ? "UPDATE":"SUBMIT"}
                                </button>&nbsp;&nbsp;
                                <button className="btn btn-primary" onClick={handlePrint}>&nbsp;PRINT&nbsp;</button>
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

export default ViewVaran;