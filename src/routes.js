import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard1 from './Components/Wizard/WizardStep1';
import Wizard2 from './Components/Wizard/WizardStep2';
import Wizard3 from './Components/Wizard/WizardStep3'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard1' component={Wizard1}/>
        <Route path='/wizard2' component={Wizard2} />
        <Route path='/wizard3' component={Wizard3} />
        <Route path='/:id' component={Dashboard} />
    </Switch>
)