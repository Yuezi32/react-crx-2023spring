import { useState } from 'react'
import { Button, Input, Modal, Select } from 'antd'
import { apiReqs } from '@/api'
import './mainModal.styl'

const { Option } = Select

function MainModal(props) {
    const [text, setText] = useState(null)
    const [option, setOption] = useState('react')

    // 接收父组件控制本组件关闭的方法
    const { onClose } = props

    // 随着Input的输入变化，及时更新text
    const handleIptChange = (e) => {
        setText(e.target.value)
    }

    // 随着Select的选择变化，及时更新option
    const handleSelectChange = (value) => {
        setOption(value)
    }

    // 提交
    const submit = () => {
        apiReqs.submitByBackground({
            data: {
                text,
                option,
            },
            success: (res) => {
                console.log(res)
            },
            fail: (res) => {
                alert(res)
            },
        })
    }

    return (
        <Modal
            className="CRX-mainModal"
            open={true}
            title={'CRX对话框'}
            footer={null}
            maskClosable={false}
            onCancel={() => {
                onClose && onClose()
            }}
            width={600}
        >
            <div className="main-content-con">
                <div className="item-con">
                    <Input
                        placeholder="请输入内容"
                        value={text}
                        onChange={handleIptChange}
                    />
                </div>
                <div className="item-con">
                    <Select
                        value={option}
                        onChange={handleSelectChange}
                        style={{ width: '100%' }}
                    >
                        <Option value="React">React</Option>
                        <Option value="Vue">Vue</Option>
                        <Option value="Angular">Angular</Option>
                    </Select>
                </div>
                <div>
                    <Button type="primary" block onClick={submit}>
                        Submit
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default MainModal
