import React from 'react';
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { IndicatorCard } from '../../components/IndicatorCard';
import { RiEqualizerLine } from 'react-icons/ri';
import { useRef } from 'react';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';

export const Dashboard = () => {
  document.title = 'Chakra Admin - Dashboard';

  const { colorMode } = useColorMode();

  const barChartRef = useRef<HTMLCanvasElement>(null);
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const lineChartRef = useRef<HTMLCanvasElement>(null);

  const buildCharts = () => {
    new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {

        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(lineChartRef.current, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (barChartRef.current) {
      buildCharts();
    }
  }, []);

  return (
    <Box
      w="full"
      h="full"
      overflow="hidden"
      overflowY="auto"
      p={4}
      bg={colorMode === 'dark' ? 'darkMode.background' : 'gray.100'}
    >
      <HStack justifyContent="space-between" mb="20px">
        <Heading
          fontSize="xl"
          color={colorMode === 'dark' ? 'darkMode.foreground' : 'gray.700'}
        >
          Dashboard
        </Heading>
        <Button size="sm">
          <HStack spacing="5px">
            <RiEqualizerLine size="18" />
            <Text>Filters</Text>
          </HStack>
        </Button>
      </HStack>

      <Grid
        gap="4"
        w="full"
        templateRows="auto auto"
        alignItems="unset"
        spacing="4"
      >
        <Grid gap="4" templateColumns="repeat(auto-fill, minmax(150px, 1fr))">
          <IndicatorCard />
          <IndicatorCard />
          <IndicatorCard />
        </Grid>

        <Grid gap="4" templateColumns="repeat(auto-fill, minmax(350px, 1fr))">
          <Box
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={barChartRef} width="400" height="400" />
          </Box>
          <Box
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={pieChartRef} width="400" height="400" />
          </Box>
          <Box
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            boxShadow="sm"
            h="full"
            minH="72"
            p={4}
          >
            <canvas ref={lineChartRef} width="400" height="400" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
