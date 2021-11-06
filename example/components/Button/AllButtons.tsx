import { Button, Flex, defaultTheme } from 'morse-ui';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

const { spacing, palette } = defaultTheme;
let { width } = Dimensions.get('window');

function AllButtons() {
  return (
    <Flex direction="column" align="start" justify="start" style={styles.root}>
      <Title>fill</Title>
      <Content>
        <Button style={styles.button}>solid</Button>
        <Button fill="outlined" style={styles.button}>
          outlined
        </Button>
        <Button fill="none" style={styles.button}>
          none
        </Button>
      </Content>

      <Title>color</Title>
      <Content>
        <Button style={styles.button}>primary</Button>
        <Button fill={'outlined'} style={styles.button}>
          primary - outlined
        </Button>
        <Button color={'success'} style={styles.button}>
          success
        </Button>
        <Button color={'warning'} style={styles.button}>
          warning
        </Button>
        <Button color={'error'} style={styles.button}>
          error
        </Button>
      </Content>
    </Flex>
  );
}

const Title: FunctionComponent = ({ children }) => (
  <Flex style={styles.title}>
    <Text style={styles.titleText}>{children}</Text>
  </Flex>
);

const Content: FunctionComponent = ({ children }) => (
  <Flex align={'start'} wrap={'wrap'} style={styles.content}>
    {children}
  </Flex>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.background.default,
  },
  title: {
    width,
    backgroundColor: palette.gray['gray-2'],
    paddingVertical: spacing * 2,
    paddingLeft: spacing * 4,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 16,
  },
  content: {
    width,
    paddingLeft: spacing * 2,
    paddingTop: spacing * 2,
  },
  button: {
    marginRight: spacing * 2,
    marginBottom: spacing * 2,
  },
});

export default AllButtons;
