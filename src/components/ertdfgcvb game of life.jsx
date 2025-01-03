import React, { useEffect } from 'react';
import { run } from '../assets/ertdfgcvb/programsJS/src/run.js';
import * as program from '../assets/ertdfgcvb/programsJS/time_milliseconds.js';
import '../assets/ertdfgcvb/style.css';

const ErtdfgcvbBG = () => {
    useEffect(() => {
        const settings = {
            element: document.querySelector('pre')
        };

        run(program, settings).then(function(e) {
            console.log(e);
        }).catch(function(e) {
            console.warn(e.message);
            console.log(e.error);
        });
    }, []);

    const text_col = 'black';
    return (
        <div>
            <pre data-selection-enabled="false" style={{ userSelect: 'none' }} className='w-screen h-screen'>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>zyxCA .+|10yxBACyz1|+.ABxz1═+.ACxz1|:.ACyz1|:.ACxz1═+: BCxz0═|+. ABxyz01═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>zy</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>╭──────────────────────╮</span>
                    <span style={{ fontWeight: 100 }}>y0═|: BCy0═+: Bxz0═+. Bxz0═+: ACyz1═+:.ABCyz01|+</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>yx</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>FPS         30</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>       │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>Cx</span>
                    <span style={{ fontWeight: 100 }}>z1═+.ABxz1═+.ACxz1|:.ACyz1|:.ACxz1═+: ACxy01|+</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>CB</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>frame       6855</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>     │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>AC</span>
                    <span style={{ fontWeight: 100 }}>xz0═+: BCy0═|: BCy0═+: Bxz0═+. Bxy0═|: ACxz0═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>  </span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>time        866547</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>   │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}> A</span>
                    <span style={{ fontWeight: 100 }}>Cxz0═|:.ACxz1═+.ABxz1|+.ACyz1|:.ACyz1|:.ACxz0═</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>++</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>size        74×42</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>    │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>. </span>
                    <span style={{ fontWeight: 100 }}>BCxz0═|:.ABxy0═|: BCy0═|: BCy0═+: Bxz0═+. Bxy0</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>00</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>font aspect 0.46</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>     │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>. </span>
                    <span style={{ fontWeight: 100 }}>ACxyz1═|:.ABxy01|:.ACxz1═+.ABxz1|+.ACyz1|:.ACy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>CC</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>│ </span>
                    <span style={{ color: text_col, background: 'royalblue' }}>cursor      48,12</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>    │</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}> A</span>
                    <span style={{ fontWeight: 100 }}>BCxyz1═|+: ACxy01|+. Bxy0═|: BCy0═|: Bxy0═+. B</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>Cx</span>
                    <span style={{ color: text_col, background: 'royalblue', fontWeight: 'normal' }}>╰──────────────────────╯</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>BB</span>
                    <span style={{ fontWeight: 100 }}>Cxyz01═|+: ABCyz0═|+. BCy01|+.ABxz1═+.ACxz1|+.</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>11══</span>
                    <span style={{ color: 'dimgray', background: 'lightgray', fontWeight: 100 }}>═══|||++++::...  AABCCxy</span>
                    <span style={{ fontWeight: 100 }}>yz011═|+:. ABCxz01═+:.ABxyz1|+. Bxy0═|: BCy0═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>...     AAAABBBBCCCxxyyyzz001══|++:.  ABCxyz01═|:. ACxy01|+. BCyz1|+.ABxz1</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xxxxyyyyyzzzz00000111═══|||++::..  ABBCxyzz01═|+:. ABxyz0═|+. BCyz1═+: BCy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1════||||+++++:::::....    AABBBCCxxyyzz011═|++:. ABCxyz01|+:.ABCyz1═+: AC</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>...   AAAABBBBBCCCCCxxxxxyyyyzzz00011══||++::.  ABCCxyz01═|+:.ABCxy01|+: A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>BCCxxxyyzzzz000011111═════||||++++:::...  AABBCCxxyzz01══|+:. ABCxy01═|:. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>zz0011══|||+++:::.....    AAAAABBBBBCCCxxxxyyzzz0011═||+::. AABCxyz01═|+. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1══|++:..  AAABBCCCxxxxyyyyzzzzz000001111════|||++:::..  ABBCxxyz001═|+:. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>|+::. AABCCxyyzz00011════|||+++++:::::....     AAABBBCCCxxyyzz001══|+::. A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+:. ABCxxyz001══||++::..   AAABBBBCCCCxxxxxyyyyyzzzz000011═══||++::.. AABC</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+: ABCxyz01═||+:.. AABBCCxxyyzzz0001111═════|||||+++++::::...   AABBCCxxyy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>+: ABCyz01═|+:. ABBCxyyz0011══||+++::....    AAAAABBBBBCCCCxxxxyyyzzz00111</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>|+. BCxz01═+:. ABCxyz001═|++:..  AABBCCCxxxyyyzzzzz000011111═════|||++++::</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>1|+. BCyz1═|:. ACxyz01═|+:.. ABBCxxyzz00111══|||++++::::.....     AAAABBBB</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>z1═+. BCy01═+: ABxyz0═|+:. ABCxyyz011═||+::..   AAABBBCCCxxxxxyyyyyzzzzz00</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xy0═+: BCyz1|+. BCxz01|+:.ABCxyz01═|++:.  ABBCCxxyyzz000111════||||+++++::</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>ACxz1|+.ACxz1═+. BCyz1═|:.ABCxy01═|+:. ABCCxyzz011══||++::...   AAAABBBBBC</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>: BCy0═+: Bxy0═|: ACyz1═+: ACxy01═|:. ABCxyz01══|+::.  AABBCCxxxyyyzzz0000</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>═+.ABxz1|+.ACxz1|+.ACxz1═+: ACxz0═|+. ABxyz01═|+:.  ABCxxyyz0011══|||+++::</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>01|: ACy01|: BCy0═+: Bxy0═|: ACxz0═|:.ABCyz01|+:. ABCxyzz01══|++:..  AAABB</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>xz1═+. Bxz0═+.ABxz1|+.ACxz1|+.ABxz0═|: ABxy01═+:. BCxyz01═|+::. AABCCxyyzz</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>Bxy0═|: ACy01|: ACy0═|: Bxy0═+: Bxy0═|:.ACxz0═|+. ACxyz1═|+:. ABCxxyz001══</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>ABxy01|:.ABxz0═+. Bxz0═+.ABxz1|+.ACxz1|+.ABxz0═|:.ABCyz1═|+: ABCxyz01═||+:</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}> BCxz0═|+.ABxy0═|: ACy01|: ACy0═|: Bxy0═+: BCy01|:.ABxy01|+: ABCyz01═|+:. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}> ACxyz1═|:.ABxy01|+.ABxz0═+. Bxz1═+.ACxz1|+.ACxz1|+.ABxy01|+. BCxz01═+:. A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>ABCxyz0═|+: ABxy01|+. BCy01|: ACy01|: ACy0═|: Bxy0═+: BCy01|+. BCyz1═|:. A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>BCxyz01═|+:.ABCxz01|+. BCyz1|+.ABxz0═+. Bxz1═+.ACxz1|+.ACxz1═+. BCy01|+: A</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>yyz011═|+:. ABCxz01═|:.ABCyz1═+: BCy01|: ACy01|: BCy0═+: Bxy0═+: BCyz1|+. </span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>11══|++:.  ABCxyz01═|:. ACxy01═+: ACyz1═+. Bxz0═+. Bxz1═+.ACxz1|+.ACxz1═+.</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>++::.. AABCCxyzz01═|+:. ABxyz0═|+. BCxz1═+: BCy01|: ACy01|: BCy0═+: Bxy0═|</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>AABBCCCxxyyz001══|+::. ABCxyz01|+:.ABCyz1═+: ACxz1═+. Bxz0═+.ABxz1|+.ACxz1</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>yzzz000111══||++::.  ABCxxyz01═|+:. BCxy01═+: ACxz0═|: ACy01|: ACy01|: BCy</span>
                </span>
                <span style={{ display: 'block' }}>
                    <span style={{ fontWeight: 100 }}>||++++:::...   AABBCCxxyzz01══|+:. ABCxyz1═|+. ACxz0═|:.ACxz1═+. Bxz0═+.AB</span>
                </span>
            </pre>
        </div>
    );
};

export default ErtdfgcvbBG;