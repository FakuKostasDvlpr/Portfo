export interface IconData {
    component: React.FC<any>; 
}
import JsI from '../../components/technologies/Js';
import ReactI from '../../components/technologies/React';
import Git from '../../components/technologies/Git';
import TailI from '../../components/technologies/tail';
import NextI from '../../components/technologies/Next';
import AstroI from '../../components/technologies/Astro';
import NodeJSI from '../../components/technologies/node';
import ExprezzI from '../../components/technologies/express';
import ViteI from '../../components/technologies/vite';
import SassI from '../../components/technologies/sass';
import MongoDBI from '../../components/technologies/MongoDB';
import CSharp from '../technologies/C#';
import NetCore from '../technologies/NetCore';

const technologiesData: IconData[] = [
    { component: JsI },
    { component: ReactI },
    { component: Git },
    { component: TailI },
    { component: NextI },
    { component: AstroI },
    { component: NodeJSI },
    { component: ExprezzI },
    { component: ViteI },
    { component: SassI },
    { component: MongoDBI },
    { component: CSharp },
    { component: NetCore },
];

export default technologiesData;