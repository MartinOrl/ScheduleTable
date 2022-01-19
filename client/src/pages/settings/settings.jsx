import React, {useState} from 'react';
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from '../../redux/langReducer/langSelectors';

import { MasterContainer, Collapse, ChevronToggle } from './settingsStyles'
import { connect } from 'react-redux';
import { SetLanguage } from '../../redux/langReducer/langActions';

const Settings = ({lang, setLanguage}) => {

    const [collapse, setCollapse] = useState(false)
    const [currentLang, setCurrentLang] = useState(lang)

    const languages = {
        "en": "English",
        "sk": "Slovensky"
    }

    return (
        <MasterContainer>
            <div>
                <h2>{lang === "en" ? "Language" : "Jazyk"}</h2>
                <Collapse collapse={collapse ? 1 : 0} onClick={() => setCollapse(!collapse)} >
                    <p>{languages[currentLang]}</p>
                    <span></span>
                    <p onClick={() => {setCurrentLang("en"); setLanguage("en")}} >English</p>
                    <p onClick={() => {setCurrentLang("sk"); setLanguage("sk")}} >Slovensky</p>
                    <ChevronToggle collapse={collapse ? 1 : 0} />
                </Collapse>
     
            </div>
        </MasterContainer>
    )
};

const mapState = createStructuredSelector({
    lang: SelectLanguage
})

const mapDispatch = dispatch => ({
    setLanguage: language => dispatch(SetLanguage(language))
})


export default connect(mapState,mapDispatch)(Settings);
