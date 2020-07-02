import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TabBar, Button, Flex, InputItem, List } from 'antd-mobile';
import './index.scss';

const q = require('./q.m4a');

const Index: FC<RouteComponentProps> = React.memo(function Index(props) {
  const [wavesurfer, setWavesurfer] = useState<any>();
  const [selectedTab, setSelectedTab] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  useEffect(() => {
    const wavesurfer = (window as any).WaveSurfer.create({
      container: '#waveform',
      waveColor: '#fff',
      progressColor: 'hsla(200, 100%, 30%, 0.5)',
      cursorColor: 'hsla(200, 100%, 30%, 0.5)',
      // 更改波形容器的背景颜色。
      backgroundColor: '#ddd',
      backend: 'MediaElement',
      // 音频播放时间轴
      mediaControls: false,
      // 播放音频的速度
      audioRate: '1',
      barWidth: 3,
      barRadius: 4,
      forceDecode: true,
      responsive: true,
      height: 120,
    });

    wavesurfer.load(q);
    setWavesurfer(wavesurfer);
  }, []);

  return (
    <div
      className="layout"
      style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="工具"
          key="util"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'utilTab'}
          onPress={() => {
            setSelectedTab('utilTab');
          }}
        >
          <div id="waveform"></div>
          <div className="control-container">
            <div className="control-item">
              <Button
                type="primary"
                onClick={() => {
                  wavesurfer.playPause();
                }}
              >
                播放/暂停
              </Button>
            </div>
            <div className="control-item">
              <List>
                <InputItem
                  placeholder="请输入裁剪开始时间(s)"
                  value={startTime}
                  onChange={(v) => {
                    setStartTime(v);
                  }}
                  clear
                  disabledKeys={['.', '0', '3']}
                >
                  开始时间(s)
                </InputItem>
                <InputItem
                  placeholder="请输入裁剪结束时间(s)"
                  value={endTime}
                  onChange={(v) => {
                    setEndTime(v);
                  }}
                  clear
                  disabledKeys={['.', '0', '3']}
                >
                  结束时间(s)
                </InputItem>
              </List>
            </div>
            <div className="control-item">
              <Flex>
                <Flex.Item>
                  <Button
                    size="small"
                    onClick={() => {
                      setStartTime('');
                      setEndTime('');
                    }}
                  >
                    取消
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button
                    type="warning"
                    size="small"
                    onClick={() => {
                      wavesurfer.playPause();
                    }}
                  >
                    重置
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                      console.log(startTime, endTime);
                      wavesurfer.play(startTime, endTime);
                    }}
                  >
                    播放
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button type="primary" size="small" onClick={() => {}}>
                    确认
                  </Button>
                </Flex.Item>
              </Flex>
            </div>
          </div>
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="my"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'myTab'}
          onPress={() => {
            setSelectedTab('myTab');
          }}
        ></TabBar.Item>
      </TabBar>
    </div>
  );
});

export default Index;
