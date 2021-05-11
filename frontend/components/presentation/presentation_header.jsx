import React from "react";
import ProductIcon from "../utils/product_icon";
import AutosaveInputContainer from '../utils/autosave_input_container';
import LastUpdate from '../utils/last_update';
import { MENU_ITEMS } from "./menu-items";
import MenuContainer from './menu_container';
import UserInfoContainer from '../session/user_info_container';


export default function PresentationHeader({doc, _docHook, saveDocHandler, handlePresent, fullScreen}){
  return (
    <header>
      <div className='icon-wrapper'>
        <ProductIcon iconIndex={3}/>  
      </div>

      <section className="titlebar">
        <div className='docs-title-widget'>
          
          <AutosaveInputContainer
            keyName="filename"
            className="doc-title-input"
            _docHook={_docHook}
            saveHandler = {saveDocHandler}
          />
          
          <div>
            <MenuContainer
              className="docs-menu"
              items={MENU_ITEMS}
              respondToMouseOut={false}
            />
            
            <LastUpdate time={doc.updatedAt} />
          </div>
        </div>
        <section className="titlebar-buttons">
          <div onClick={() => {
            fullScreen.enter();
            handlePresent();
          }}>Present</div>
          <UserInfoContainer />
        </section>
      </section>
    </header>
  )
}