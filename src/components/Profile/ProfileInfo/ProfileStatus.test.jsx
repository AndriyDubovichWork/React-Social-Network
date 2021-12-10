const { create } = require('react-test-renderer');
import ProfileStatus from './ProfileStatus';
import React from 'react';

describe('Profile Status', () => {
  test('status from props should be in a state', () => {
    const component = create(<ProfileStatus status='test' />);
    const Instance = component.getInstance();
    // @ts-ignore
    expect(Instance.state.status).toBe('test');
  });
  test('span should be displayed with coorrect status ', () => {
    const component = create(<ProfileStatus status='test' />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('test');
  });
  test('after creation input shouldnt be displayed ', () => {
    const component = create(<ProfileStatus status='test' />);
    const root = component.root;

    expect(() => {
      root.findByType('input');
    }).toThrow();
  });
  test('after creation span should contain coorrect status ', () => {
    const component = create(<ProfileStatus status='test' />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('test');
  });
  test('Input should be displayed in EditMode insted of span', () => {
    const component = create(<ProfileStatus status='test' />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('test');
  });
  test('callback should be called', () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status='test' UpdateStatus={mockCallBack} />
    );
    const Instance = component.getInstance();

    // @ts-ignore
    Instance.deactivateEditMode();

    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
