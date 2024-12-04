import styled from "styled-components";

type RowProps = { $align?: string; width?: number; $hover?: boolean };
type HeaderProps = { $transparent?: boolean };
const TableResponsive = styled.div`
  &.table_scroll {
    overflow-x: auto;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;

  &.table_size_sm {
    min-width: 600px !important;
  }
  &.table_size_md {
    min-width: 864px !important;
  }
  &.table_size_lg {
    min-width: 1000px !important;
  }
  &.table_size_xlg {
    min-width: 1200px !important;
  }
`;

const Head = styled.thead<HeaderProps>`
  vertical-align: bottom;
  background-color: ${(props) => (props.$transparent ? "transparent" : "#f7f7f7")};
  border-bottom: 1px solid #ebebeb;
`;

const Body = styled.tbody`
  position: relative;
`;

const TH = styled.th<RowProps>`
  text-align: start;
  padding: 10px;
  text-align: ${(props) => props.$align ?? "start"};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  & svg,
  & button svg,
  & svg path,
  & button svg path {
    fill: #616161 !important;
  }
`;

const TD = styled(TH).attrs({ as: "td" })<RowProps>``;

const TR = styled.tr<RowProps>`
  &:hover {
    background-color: ${(props) => (props.$hover ? "rgb(247 247 247 / 60%)" : "transparent")};
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
`;

export const TableStyled = Object.assign(TableResponsive, { Table, TH, TD, TR, Body, Head });
