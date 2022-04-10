import React from 'react';
import { withTranslation } from 'react-i18next';
import {Button, CheckIcon, FormControl, HStack, Input, Modal, Select, Text} from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import ButtonGroup from "native-base/src/components/primitives/Button/ButtonGroup";

class EditEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDateStartEvent: false,
            openTimeStartEvent: false,
            startEvent: new Date(),
            endEvent: new Date(),
            repeat: '',
        }
    }
    event(){

    }
    render() {
        const { t } = this.props;
        return (
            <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <Modal.Content style={styles.addModal} maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header><Text>{t('add_event.edit')}{this.props.event}</Text></Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label><Text>{t('event_todo.title')}</Text></FormControl.Label>
                            <Input bgColor="#f8f8f8"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label><Text>{t('add_event.start')}</Text></FormControl.Label>
                            <HStack space={3}>
                                <Button style={styles.selectDate} onPress={() => this.setState({openDateStartEvent: true})}>
                                    <Text>{moment(this.state.startEvent).format("DD MMMM YYYY")}</Text>
                                </Button>
                                <DatePicker
                                    modal
                                    open={this.state.openDateStartEvent}
                                    date={this.state.startEvent}
                                    onConfirm={(date) => {
                                        this.setState({openDateStartEvent: false})
                                        this.setState({startEvent: date})
                                    }}
                                    onCancel={() => {
                                        this.setState({openDateStartEvent: false})
                                    }}
                                    mode={"date"}
                                />
                                <Button style={styles.selectTime} onPress={() => this.setState({openTimeStartEvent: true})}>
                                    <Text>{moment(this.state.startEvent).format("HH:mm")}</Text>
                                </Button>
                                <DatePicker
                                    modal
                                    open={this.state.openTimeStartEvent}
                                    date={this.state.startEvent}
                                    onConfirm={(date) => {
                                        this.setState({openTimeStartEvent: false})
                                        this.setState({startEvent: date})
                                    }}
                                    onCancel={() => {
                                        this.setState({openTimeStartEvent: false})
                                    }}
                                    mode={"time"}
                                />
                            </HStack>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label><Text>{t('add_event.end')}</Text></FormControl.Label>
                            <HStack space={3}>
                                <Button style={styles.selectDate} onPress={() => this.setState({openDateEndEvent: true})}>
                                    <Text>{moment(this.state.endEvent).format("DD MMMM YYYY")}</Text>
                                </Button>
                                <DatePicker
                                    modal
                                    open={this.state.openDateEndEvent}
                                    date={this.state.endEvent}
                                    onConfirm={(date) => {
                                        this.setState({openDateEndEvent: false})
                                        this.setState({endEvent: date})
                                    }}
                                    onCancel={() => {
                                        this.setState({openDateEndEvent: false})
                                    }}
                                    mode={"date"}
                                />
                                <Button style={styles.selectTime} onPress={() => this.setState({openTimeEndEvent: true})}>
                                    <Text>{moment(this.state.endEvent).format("HH:mm")}</Text>
                                </Button>
                                <DatePicker
                                    modal
                                    open={this.state.openTimeEndEvent}
                                    date={this.state.endEvent}
                                    onConfirm={(date) => {
                                        this.setState({openTimeEndEvent: false})
                                        this.setState({endEvent: date})
                                    }}
                                    onCancel={() => {
                                        this.setState({openTimeEndEvent: false})
                                    }}
                                    mode={"time"}
                                />
                            </HStack>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label><Text>{t('add_event.repeat')}</Text></FormControl.Label>
                            <Select bgColor="#f8f8f8" selectedValue={this.state.repeat} minWidth="200" accessibilityLabel="Choose repeat" placeholder={t('add_event.choose')} _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} onValueChange={(item) => this.setState({repeat: item})}>
                                <Select.Item label={t('add_event.choose_repeat.none')} value="None" />
                                <Select.Item label={t('add_event.choose_repeat.daily')} value="Daily" />
                                <Select.Item label={t('add_event.choose_repeat.weekly')} value="Weekly" />
                                <Select.Item label={t('add_event.choose_repeat.monthly')} value="Monthly" />
                                <Select.Item label={t('add_event.choose_repeat.annually')} value="Annually" />
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label><Text>{t('event_todo.color')}</Text></FormControl.Label>
                            <Input bgColor="#f8f8f8"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label><Text>{t('event_todo.icon')}</Text></FormControl.Label>
                            <Input bgColor="#f8f8f8"/>
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer style={styles.addModal}>
                        <ButtonGroup>
                        <Button>
                            <Text color="blue.200">
                                {t('event_todo.save')}
                            </Text>
                        </Button>
                            <Button colorScheme="danger">
                                <Text color="#ffffff">
                                    {t('event_todo.delete')}
                                </Text>
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        );
    }
}

const styles = {
    selectDate: {
        width: "60%",
        height: 40,
        backgroundColor:"#f8f8f8"
    },
    selectTime: {
        width: "30%",
        height: 40,
        backgroundColor:"#f8f8f8"
    },
};

export default withTranslation()(EditEvent);