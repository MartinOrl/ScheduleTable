import React, {useState} from 'react';
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from '../../redux/langReducer/langSelectors';

import { MasterContainer, Collapse, ChevronToggle } from './settingsStyles'
import { connect } from 'react-redux';
import { SetLanguage } from '../../redux/langReducer/langActions';

import { SettingsLanguages } from '../../data/languageMutations';
import { SetGroup } from '../../redux/groupReducer/groupAction';
import { SelectGroup } from '../../redux/groupReducer/groupSelectors';

const Settings = ({lang, group, setLanguage, setGroup}) => {

    const [collapse, setCollapse] = useState("")

    return (
        <MasterContainer>
            <div>
                <h2>{SettingsLanguages.langHeading[lang]}</h2>
                <Collapse collapse={collapse === "language" ? 1 : 0} onClick={() => setCollapse(collapse === "language" ? "" : "language")} >
                    <p>{SettingsLanguages.languageNames[lang]}</p>
                    <span></span>
                    <p onClick={() => {setLanguage("en")}} >English</p>
                    <p onClick={() => {setLanguage("sk")}} >Slovensky</p>
                    <p onClick={() => {setLanguage("ge")}} >Deutsch</p>
                    <p onClick={() => {setLanguage("ru")}} >русский</p>
                    <p onClick={() => {setLanguage("ua")}} >український</p>
                    <ChevronToggle collapse={collapse === "language" ? 1 : 0} />
                </Collapse>
            </div>
            <div>
                <h2>{SettingsLanguages.groupHeading[lang]}</h2>
                <Collapse collapse={collapse === "group" ? 1 : 0} onClick={() => setCollapse(collapse === "group" ? "" : "group")} >
                    <p>{group}</p>
                    <span></span>
                    <p onClick={() => {setGroup(51)}} >51</p>
                    <p onClick={() => {setGroup(52)}} >52</p>
                    <p onClick={() => {setGroup(53)}} >53</p>
                    <p onClick={() => {setGroup(54)}} >54</p>
                    <ChevronToggle collapse={collapse === "group" ? 1 : 0} />
                </Collapse>
            </div>
        </MasterContainer>
    )
};

const mapState = createStructuredSelector({
    lang: SelectLanguage,
    group: SelectGroup
})

const mapDispatch = dispatch => ({
    setLanguage: language => dispatch(SetLanguage(language)),
    setGroup: group => dispatch(SetGroup(group))
    
})


export default connect(mapState,mapDispatch)(Settings);
