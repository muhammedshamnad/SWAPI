import React, { useEffect, useState } from "react";
import { notification, Pagination, Spin, Tabs } from "antd";
import { RenderItem, ShowFilms, ShowPeople, ShowShips } from "../../Components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Utility from "../../Global/utility";
const { TabPane } = Tabs;

function Home(props: any) {
    const { savedStore, homeStore } = props;
    const [entity, setEntity] = useState('people');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async () => {
        try {
            setIsLoading(true);
            await homeStore?.fetchData(entity, `page=${page}`);
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false)
            Utility?.openNotificationDanger('something went wrong', 'Please contact administrator')
        };
    }
    useEffect(() => {
        fetchData();
    }, [entity, page])

    const handleTabChange = (key: string) => {
        setEntity(key)
    };

    

    const saveData = (data: any) => {
        savedStore?.saveData(data);
        Utility?.openNotificationInfo('Saved successfully', 'Please goto the saved menu for getting saved items.')
    }

    const updatePage = (pageNo: number) => {
        setPage(pageNo)
    }

    return <div>
        <Spin spinning={isLoading}>
            <Tabs size="large" centered tabBarStyle={{color: 'black '}} defaultActiveKey="people" activeKey={entity} key={'1'} onChange={handleTabChange}>
                <TabPane  tab="People" key="people" />
                <TabPane tab="Films" key="films" />
                <TabPane tab="Star ships" key="starships" />
            </Tabs>
            <RenderItem condition={entity === 'people'} key='people'>
                <ShowPeople people={homeStore?.data} key='people' saveData={saveData} />
            </RenderItem>
            <RenderItem condition={entity === 'films'} key='films'>
                <ShowFilms films={homeStore?.data} key='films' saveData={saveData} />
            </RenderItem>
            <RenderItem condition={entity === 'starships'} key='starship'>
                <ShowShips ships={homeStore?.data} key="starship" saveData={saveData} />
            </RenderItem>
        </Spin>
        <RenderItem condition={!isLoading}>
            <Pagination defaultCurrent={page} showSizeChanger={false}  pageSize={10} onChange={(page: number) => updatePage(page)} total={homeStore?.total} />
        </RenderItem>
    </div>
}

export default inject('savedStore', 'homeStore')(observer(Home)) 