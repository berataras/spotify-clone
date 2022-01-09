//components
import {Navbar} from "components";

//route
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//pages
import {Home, Search, Collection} from "pages";

function Content() {
    return (
        <main className='flex-auto px-8 overflow-auto'>
            <Navbar />

            <div className="py-6">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/collection" component={Collection} />
                </Switch>
            </div>
        </main>
    );
}

export default Content;
