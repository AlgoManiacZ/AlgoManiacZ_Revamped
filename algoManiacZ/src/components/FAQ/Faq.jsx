import {useState} from 'react'
import Panel from './Panel'
import {panelData} from '../../utils/PanelData'
import {useMediaQuery} from 'react-responsive'
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const handlePanelClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }
    const isMobileDevice = useMediaQuery({
        query: '(min-device-width: 760px)',
    })

    return (
        <>
            {!isMobileDevice ? (
                <div className="faq">
                    <div className="  h-auto pb-10 text-textColor bg-backgroundBody w-full flex flex-col justify-center gap-y-5 items-center">
                        <h1 className="text-6xl font-bold mt-2">FAQs</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-5 md:px-20 pt-5 gap-3 md:gap-x-5">
                            {panelData.map((panel, index) => (
                                <Panel
                                    key={index}
                                    title={panel.title}
                                    isActive={activeIndex === index}
                                    onShow={() => handlePanelClick(index)}
                                >
                                    {panel.content}
                                </Panel>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="faq bg-backgroundBody py-4 flex gap-4 justify-center">
                    <div className="w-2/5 h-fit flex gap-2 flex-col bg-backgroundBody">
                        {panelData.map((panel, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <Panel
                                        key={index}
                                        title={panel.title}
                                        isActive={activeIndex === index}
                                        onShow={() => handlePanelClick(index)}
                                    >
                                        {panel.content}
                                    </Panel>
                                )
                            } else {
                                return null // You can also return some default content or an empty element
                            }
                        })}
                    </div>
                    <div className="w-2/5 h-fit flex gap-2 flex-col bg-backgroundBody">
                        {panelData.map((panel, index) => {
                            if (index % 2 != 0) {
                                return (
                                    <Panel
                                        key={index}
                                        title={panel.title}
                                        isActive={activeIndex === index}
                                        onShow={() => handlePanelClick(index)}
                                    >
                                        {panel.content}
                                    </Panel>
                                )
                            } else {
                                return null // You can also return some default content or an empty element
                            }
                        })}
                    </div>
                </div>
            )}
        </>
    )
}
export default Faq
